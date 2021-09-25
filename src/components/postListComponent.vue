<template>
  <div class="container">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <ul class="content-wrapper" v-if="postData">
      <li class="content" v-for="item in postData" :key="item.id">
        <!-- 头像 -->
        <router-link :to="`/user/${item.author.loginname}`">
          <img :src="item.author.avatar_url" :title="item.author.loginname" />
        </router-link>

        <!-- 分类 -->
        <Category :data="item" 
          v-if="categoryStatus(item)"></Category>

        <!-- 文字 -->
        <div class="text">
          <router-link :to="`/topic/${item.id}`" :title="item.title">
            <p class="title">{{ item.title }}</p>
          </router-link>
          <div class="info">
            <span class="item-right">
              {{ timeToNow(item.last_reply_at) }}
            </span>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import timeToNow from "@/utils/timeToNow";
import Category from './Category.vue';

export default {
  name: "postListComponent",
  components: { Category },
  props: ["postData"],
  methods: {
    timeToNow,
    categoryStatus(item){
      if(item.good || item.top || item.tab){
        return true
      }else{
        return false
      }
    },  
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.container{
    margin-top: 20px;
    margin-bottom: 20px;
}
.header {
  border-radius: $borderRadius $borderRadius 0 0;
  min-height: 40px;
  background: #f6f6f6;
  padding: $globalPadding;
  display: flex;
}

.content {
  padding: 10px;
  height: 50px;
  border-bottom: 1px solid #f0f0f0;
  background: white;
  display: flex;
  position: relative;
  img {
    width: 30px;
    margin-right: 10px;
    border-radius: $borderRadius;
  }

  .text {
    margin-left: 10px;
    .title {
      color: #888;
      font-size: 16px;
      text-align: center;
      @extend %textOverFlow;
    }
    .info {
      font-size: 10px;
      display: flex;
      .item-left {
        p {
          display: inline-block;
        }
        .reply_count {
          color: #9e78c0;
        }
        .visit_count {
          color: #b4b4b4;
        }
      }
      .item-right {
        position: absolute;
        right: 10px;
        font-size: 10px;
        color: #778087;
      }
    }
  }
}
</style>