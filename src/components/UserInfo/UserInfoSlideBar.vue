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
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
$slidebarWidth: 290px;

.container {
  width: $slidebarWidth;
  font-size: 13px;
  .authersummary{
    .userinfo{
      .top{
        display: flex;
        align-items: center;
        color: #778087;
        font-size: 16px;
        img{
          width: 48px;
          margin-right: 10px;
        }
      }
      .score{
        margin-top: 10px;
        color: #333;
        font-size: 14px;
      }
    }
  }
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

@media (max-width: 980px) {
    .container{
      display: none;
    }
}
</style>