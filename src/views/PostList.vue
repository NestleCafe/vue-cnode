<template>
  <div class="container">
    <Loading v-if="isLoading"></Loading>
    <topics-list-component :postData="postList" v-else>
      <template v-slot:header>
        <span
          v-for="(item, index) in headerContent"
          :key="index"
          @click="handleClick(item, index)"
          class="item"
          :class="{ selected: headerIndex === index }"
        >
          {{ item.text }}
        </span>
      </template>
    </topics-list-component>
  </div>
</template>

<script>
import { getPostList } from "@/api/index";
import headerContent from "@/utils/PostList/headerContent";
import Loading from "@/components/Loading";
import timeToNow from "@/utils/timeToNow";
import TopicsListComponent from "@/components/TopicsListComponent.vue";

export default {
  name: "PostList",
  components: { Loading, TopicsListComponent },
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
    };
  },
  methods: {
    timeToNow,
    async getPostList(tab) {
      tab = tab || "all";
      this.isLoading = true;
      const res = await getPostList(tab);
      const data = res.data.data;
      this.postList = data;
      this.isLoading = false;
    },
    handleClick(item, index) {
      this.headerIndex = index;
      /* this.getPostList(item.tab) */
    },
  },
  mounted() {
    this.getPostList();
  },
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