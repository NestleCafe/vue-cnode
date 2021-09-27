<template>
<div class="topicHeaderWrapper">
    <basic-container>
      <template v-slot:header>
        <div class="topicHeader">
          <div class="topic_title">
            <span class="Category">
              <Category :data="postData"></Category>
            </span>
            <span class="title">{{ postData.title }}</span>
          </div>
          <ul class="articleInfo">
            <li>发布于 {{ timeToNow(postData.create_at) }}</li>
            <li>
              作者
              <router-link :to="`/user/${postData.loginname}`">
                {{ postData.author.loginname }}
              </router-link>
            </li>
            <li>{{ postData.visit_count }} 次浏览</li>
            <li v-if="comeFrom">来自 {{ comeFrom }}</li>
          </ul>
        </div>
      </template>

      <template v-slot:main>
        <div class="topic_content" v-html="postData.content"></div>
      </template>
    </basic-container>
</div>
</template>

<script>
import Category from "@/components/Category";
import timeToNow from "@/utils/timeToNow";

export default {
  name: "Topic-Header",
  components: { Category },
  props: ["postData"],
  data(){
    return {
      tabTable: {
        share : "分享",
        ask : '问答',
        job : '招聘',
        dev : '客户端测试',
      },
    }
  },
  methods: {
    timeToNow,
  },
  computed: {
    comeFrom() {
      const tab = this.postData.tab;
      const tabTable = this.tabTable
      for(let key in tabTable){
        if(key === tab){
          return tabTable[key]
        }
      }
      return null
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.topicHeader{
  display: flex;
  flex-direction: column;
  .topic_title {
    color: #333;
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: flex;
    .title {
      @extend %textOverFlow;
      -webkit-line-clamp: 2;
    }
  }
  .articleInfo {
    display: flex;
    li {
      font-size: 12px;
      color: #838383;
      font-weight: normal;
      &::before {
        content: "•";
        margin: 0 5px;
      }
    }
  }
}
.topic_content {
  background: white;
  padding: $globalPadding;
}
.topicHeaderWrapper::v-deep{
  .container .header{
    background: white;
  }
}
.topic_content::v-deep{ 
  @extend %initialCSS;
  img {
    max-width: 100%;
  }
}
</style>