<template>
  <div>
    <Loading v-if="isloading"></Loading>

    <div v-else class="content">
      <div class="panel">
        <div class="header">
          <ul class="nav">
            <li><router-link :to="'/'">主页 </router-link></li>
            <li>/</li>
          </ul>
        </div>
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
      </div>

      <div class="recent_topics">
        <post-list-component :postData="userData.recent_topics">
          <template v-slot:header> 最近创建的话题 </template>
        </post-list-component>
      </div>

      <div class="recent_replies">
        <post-list-component :postData="userData.recent_replies">
          <template v-slot:header> 最近参与的话题 </template>
        </post-list-component>
      </div>

    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/index";
import Loading from "@/components/Loading";
import timeToNow from "@/utils/timeToNow";
import PostListComponent from "@/components/postListComponent";
export default {
  name: "userInfo",
  components: { Loading, PostListComponent },
  data() {
    return {
      isloading: null,
      userData: {},
    };
  },
  methods: {
    timeToNow,
    async getUserInfo(loginname) {
      this.isLoading = true;
      const res = await getUserInfo(loginname);
      this.userData = res.data.data;
      console.log(this.userData);
    },
  },
  created() {
    this.getUserInfo(this.$route.params.loginname);
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.content {
  font-size: 14px;
  .panel {
    margin-top: 20px;
    .header {
      border-radius: $borderRadius $borderRadius 0 0;
      height: 40px;
      background: #f6f6f6;
      padding: $globalPadding;
      .nav {
        display: flex;
        li {
          color: #ccc;
          &:first-child {
            color: #80bd01;
            margin-right: 0.5em;
          }
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
  }
}
</style>