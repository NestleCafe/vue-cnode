<template>
  <div class="autherInof">
    <div class="authersummary">
      <basic-container>
        <template v-slot:header> 作者 </template>
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

    <div class="recent_topics">
      <basic-container>
        <template v-slot:header> 最近创建的话题 </template>
        <template v-slot:main>
          <ul v-if="recentTopics">
            <li v-for="reply in recentTopics" 
              :key="reply.id"
              class="item"
            >
              <router-link :to="`/topic/${reply.id}`">
                {{reply.title}}
              </router-link>
            </li>
          </ul>
          <span v-else>无</span>      
          </template>
      </basic-container>
    </div>



    <div class="recent_relies">
      <basic-container>
        <template v-slot:header> 最近参与的话题 </template>
        <template v-slot:main>
          <ul v-if="recentReplies">
            <li v-for="reply in recentReplies" 
              :key="reply.id"
              class="item"
            >
              <router-link :to="`/topic/${reply.id}`">
                {{reply.title}}
              </router-link>
            </li>
          </ul>
          <span v-else>无</span>      
          </template>
      </basic-container>
    </div>

  </div>
</template>

<script>
export default {
  name: "ArticleSlideBar",
  props: ["userData"],
  methods: {
  },
  computed: {
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

.autherInof {
  width: $slidebarWidth;
  font-size: 13px;
}
.authersummary{
  .top{
    display: flex;
    img{
      width: 48px;
    }
    p{
      margin-left: 10px;
      font-size: 16px;
      color: #778087;
    }
  }
  .score{
    font-size: 14px;
    margin-top: 10px;
  }
}
.recent_relies, .recent_topics{
  .item{
    padding: 5px 0;
  }
}
.authersummary::v-deep {
  @extend %widthReset;
  .main{
    @extend %widthReset;
  }
}
.recent_topics::v-deep {
  @extend %widthReset;
  .main{
    @extend %widthReset;
  }
}
.recent_relies::v-deep {
  @extend %widthReset;
  .main{
    @extend %widthReset;
  }  
}
</style>