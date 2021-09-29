<template>
  <div class="article">
    <Loading v-if="isLoading"></Loading>

    <div class="content" v-else>
      <div class="main">
        <topic-header :postData="postData"></topic-header>
        <topic-reply v-if="postData.reply_count"
          :postData="postData"></topic-reply>
      </div>

      <div class="slideBar">
        <article-slide-bar :userData="this.authorData"></article-slide-bar>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDate, getUserInfo } from "@/api/index";
import Loading from "@/components/Loading";
import TopicHeader from "@/components/Article/TopicHeader";
import TopicReply from "@/components/Article/TopicReply";
import ArticleSlideBar from "@/components/Article/ArticleSlideBar";
export default {
  name: "Article",
  components: { Loading, TopicHeader, TopicReply, ArticleSlideBar },
  data() {
    return {
      isLoading: null,
      //当前文章页数据
      postData: {},
      //侧边栏作者信息
      authorData: {},
    };
  },
  methods: {
    //获取作者信息
    async getUserInfo(loginname) {
      const res = await getUserInfo(loginname);
      this.authorData = res.data.data;
    },
    //获取当前文章页数据
    async getData(id) {
      this.isLoading = true;
      const res = await getArticleDate(id);
      this.postData = res.data.data;
      //获得作者ID后调用getUserInfo()
      this.getUserInfo(this.postData.author.loginname);
      this.isLoading = false;
    },
  },
  created() {
    this.getData(this.$route.params.id);
  },
  watch: {
    //路由监听来去
    '$route'(to){
      let hash = to.fullPath.slice(7)
      this.getData(hash)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.content {
  display: flex;

  .main{
    margin-top: 0;
    flex-grow: 1;
    margin-bottom: 20px;
  }
  .slideBar {
    margin-left: 20px;
  }
}
@media (max-width: 980px) {
  .slideBar {
    margin: 0 !important;
  }
  .slideBar::v-deep{
    .container{
      display: none;
    }
  }
}
</style>