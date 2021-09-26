<template>
  <div>
    <Loading v-if="isloading"></Loading>

    <div class="content" v-else>
      <div class="main">
        <basic-container>
          <template v-slot:header>
            <ul class="nav">
              <li>
                <router-link :to="'/'">主页 </router-link>
              </li>
              <li>/</li>
            </ul>
          </template>

          <template v-slot:main>
            <div class="userinfo">
              <div class="top">
                <img :src="userData.avatar_url" />
                <p>{{ userData.loginname }}</p>
              </div>
              <div class="score">{{ userData.score }} 积分</div>
              <div class="create_at">
                注册时间{{ " " + timeToNow(userData.create_at) }}
              </div>
            </div>
          </template>
        </basic-container>

        <div class="recent_topics topicsList">
          <topics-list-component :postData="userData.recent_topics">
            <template v-slot:header> 最近创建的话题 </template>
          </topics-list-component>
        </div>

        <div class="recent_replies topicsList">
          <topics-list-component :postData="userData.recent_replies">
            <template v-slot:header> 最近参与的话题 </template>
          </topics-list-component>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/index";
import Loading from "@/components/Loading";
import timeToNow from "@/utils/timeToNow";
import TopicsListComponent from "@/components/TopicsListComponent";
export default {
  name: "userInfo",
  components: { Loading, TopicsListComponent },
  data() {
    return {
      isloading: true,
      userData: {},
    };
  },
  methods: {
    timeToNow,
    async getUserInfo(loginname) {
      this.isLoading = true;
      const res = await getUserInfo(loginname);
      this.userData = res.data.data;
      this.isloading = false;
    },
  },
  created() {
    this.getUserInfo(this.$route.params.loginname);
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.content{
  .main{
    margin-top: 0;
  }
}
.nav {
  display: flex;
  font-size: 14px;
  li {
    color: #ccc;
    &:first-child {
      color: #80bd01;
      margin-right: 0.5em;
    }
  }
}

.userinfo {
  padding: $globalPadding;
  background: white;
  .top {
    display: flex;
    img {
      height: 40px;
    }
    p {
      margin-left: 10px;
      color: #778087;
      font-size: 14px;
    }
  }
  .score {
    padding: $globalPadding;
  }
  .create_at {
    color: #ababab;
  }
}

.topicsList::v-deep {
  .content .text .title {
    color: #08c;
    &:hover {
      color: #005580;
    }
  }
}
</style>