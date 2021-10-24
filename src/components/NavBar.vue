<template>
  <div class="container">
    <div class="container_inner">
      <div class="items-left">
        <router-link :to="{
          name: 'PostList',
          query: {
            page: 1,
            tab: 'all'
          }
        }"
          ><img src="@/assets/cnodejs_light.svg" class="logo"
        /></router-link>
      </div>

      <ul class="items-right">
        <li><router-link :to="'/'">首页</router-link></li>
        <li v-for="(content, index) in NavBarContent"
          :key="index"
          title="将会跳转至cnodejs.org"
        >
          <a :href="content.url">
            {{content.title}}
          </a>
        </li>
      </ul>
      
    </div>
    
  </div>
</template>

<script>
import NavBarContent from '@/utils/NavBar/NavBarContent'

export default {
  name: "Header",
  data(){
    return{
      NavBarContent,
    }
  },
  methods:{
    addClass(className){
      this.$refs.search.setAttribute("class",`search ${className}`);
      console.log(this.$refs.search)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.container {
    background: #444444;
    width: 100%;
  .container_inner {
    margin: 0 10%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .items-left {
      display: flex;
      justify-content: space-between;
      .logo {
        width: 120px;
        /*  无法拖拽 */
        -webkit-user-drag: none;
      }
      .search {
        margin-left: 20px;
        border-radius: 50px;
        border: none;
        text-indent: 1.5em;
        width: 233px;
        height: 26px;
        background: #888888;
        padding: 3px 5px 3px 22px;
      }
    }
    .items-right {
      font-size: 13px;
      color: #ccc;
      display: flex;

      li {
        padding: 0 8px;
        white-space: nowrap;
      }
    }
  }
}
</style>