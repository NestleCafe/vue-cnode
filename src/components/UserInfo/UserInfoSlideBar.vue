<template>
  <div class="container">
    <div class="authersummary">
      <basic-container>
        <template v-slot:header> 个人信息 </template>
        <template v-slot:main>
          <div class="userinfo">
            <div class="top">
              <img :src="userData.avatar_url" />
              <p>
                <router-link :to="`/user/${userData.loginname}`">
                  {{ userData.loginname }}
                </router-link>
              </p>
            </div>
            <div class="score"> 积分: {{ userData.score }}</div>
          </div>
        </template>
      </basic-container>
    </div>

    <div class="friendlyPage">
      <basic-container>
        <template v-slot:header> 友情社区 </template>
        <template v-slot:main>
          <ul class="pageList">
            <li class="page">
              <a href="https://ruby-china.org/" target="_blank">
                <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png">
              </a>
            </li>
            <li class="page">
              <a href="http://golangtc.com/" target="_blank">
                <img src="//static2.cnodejs.org/public/images/golangtc-logo.png">
              </a>
            </li>
            <li class="page">
              <a href="http://phphub.org/" target="_blank">
                <img src="//static2.cnodejs.org/public/images/phphub-logo.png">
              </a>
            </li>              
          </ul>   
          </template>
      </basic-container>
    </div>

  </div>
</template>

<script>
export default {
  name: "ArticleSlideBar",
  props: ["userData"],
  computed: {
    //限制侧边栏的最近创建与参与话题小于等于5条
    recentTopics(){
      let recentTopics = this.userData.recent_topics
      if(recentTopics){
        let length = recentTopics.length >= 5 ? 5 : recentTopics.length
        if(length === 0){
          return false
        }else{
          return recentTopics.splice(0, length)
        }        
      }else{
        return false
      }
    },
    recentReplies(){
      let recentReplies = this.userData.recent_replies
      if(recentReplies){
        let length = recentReplies.length >= 5 ? 5 : recentReplies.length
        if(length === 0){
          return false
        }else{
          return recentReplies.splice(0, length)
        }
      }else{
        return false
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
$slidebarWidth: 290px;

.container {
  width: $slidebarWidth;
  font-size: 13px;
  .friendlyPage{
    li{
      &:not(:first-child){
        margin-top: 10px;
      }
      img{
        width: 150px;
      }
    }
  }
}

%widthReset {
  .container {
    max-width: $slidebarWidth;
    min-width: $slidebarWidth;;
    .header {
      max-width: $slidebarWidth;
      min-width: $slidebarWidth;
    }
    .main {
      max-width: $slidebarWidth;
      min-width: $slidebarWidth;
    }
  }
}
.authersummary::v-deep {
  @extend %widthReset;
  .main{
    @extend %widthReset;
  }
}
.friendlyPage::v-deep {
  @extend %widthReset;
  .main{
    @extend %widthReset;
  }
}
</style>