<template>
  <div class="container">
    <Loading v-if="isLoading"></Loading>
  <div class="content" v-else>
        <topics-list-component :postData="postList">
        <template v-slot:header>
          <span
            v-for="(item, index) in headerContent"
            :key="index"
            @click="changeTag(item, index)"
            class="item"
            :class="{ selected: headerIndex === index }"
          >
            {{ item.text }}
          </span>
        </template>
      </topics-list-component>
      <Pagination 
        :currentPage.sync="postPage"
      ></Pagination>
  </div>
  </div>
</template>

<script>
import { getPostList } from "@/api/index";
import headerContent from "@/utils/PostList/headerContent";
import Loading from "@/components/Loading";
import timeToNow from "@/utils/timeToNow";
import TopicsListComponent from "@/components/TopicsListComponent";
import Pagination from "@/components/Pagination";

export default {
  name: "PostList",
  components: { Loading, TopicsListComponent, Pagination },
  data() {
    return {
      //是否加载
      isLoading: null,
      //列表头导航
      headerContent,
      //选中的列表头
      headerIndex: 0,
      //页面列表数据
      postList: [],
      //页面页数
      postPage: 1,
      //页面tag
      postTab: 'all'
    };
  },
  methods: {
    timeToNow,
    async getPostList(page) {
      this.isLoading = true;
      const res = await getPostList(page);
      const data = res.data.data;
      this.postList = data;
      this.isLoading = false;
    },
    changeTag(item, index) {
      this.headerIndex = index;
      this.postTab = item.tab
      
    },
  },
  mounted() {
    this.getPostList(this.postPage);
  },
  watch:{
    postPage(){
      console.log('postPage:',this.postPage)
      this.getPostList(this.postPage)
    },
    postTab(){
      console.log('postTab:',this.postTab)
      this.postPage = 1
      this.getPostList(this.postPage, this.postTab)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.item {
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: default;
  padding: 3px 4px;
  color: #80bd01;

  &.selected {
    background: #80bd01;
    color: white;
    border-radius: $borderRadius;
    padding: auto auto;
  }
  &:not(.selected):hover {
    color: #005580;
  }
}
</style>