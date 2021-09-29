<template>
  <div class="container">
    <basic-container>
      <template v-slot:header>
        <slot name="header"></slot>
      </template>
      <template v-slot:main>
        <ul class="content-wrapper" v-if="postData">
          <li class="content" v-for="item in postData" :key="item.id">
            <div class="item-left">
              <!-- 头像 -->
              <router-link :to="`/user/${item.author.loginname}`">
                <img
                  :src="item.author.avatar_url"
                  :title="item.author.loginname"
                />
              </router-link>
              <!-- 回复/浏览 次数 -->
              <div class="count" 
                v-if="item.visit_count || item.visit_count === 0"
              >
                <p class="reply_count">
                  {{ item.reply_count }}
                </p>
                <p>/</p>
                <p class="visit_count">
                  {{ item.visit_count }}
                </p>
              </div>
              <!-- 分类 -->
              <Category :data="item" v-if="categoryStatus(item)"></Category>

              <!-- 标题 -->
              <router-link :to="`/topic/${item.id}`" :title="item.title">
                <p class="title">{{ item.title }}</p>
              </router-link>
            </div>

            <div class="item-right">
              <!-- 最后回复时间 -->
              <span class="reply_at">
                {{ timeToNow(item.last_reply_at) }}
              </span>
            </div>
          </li>
        </ul>
      </template>
    </basic-container>
  </div>
</template>

<script>
import timeToNow from "@/utils/timeToNow";
import Category from "./Category.vue";
export default {
  name: "postListComponent",
  components: { Category },
  props: ["postData"],
  methods: {
    timeToNow,
    categoryStatus(item) {
      if (item.good || item.top || item.tab) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.container::v-deep {
  .container .main {
    padding: 0;
  }
}
.container{
  min-width: 635px;
}
.content {
  padding: 10px;
  height: 50px;
  background: white;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child){
    border-bottom: 1px solid #f0f0f0;
  }
  .item-left {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      border-radius: $borderRadius;
    }
    .count {
      display: flex;
      font-size: 14px;
      min-width: 70px;
      color: #333;
      align-items: center;
      justify-content: center;
      .reply_count {
        color: #9e78c0;
      }
      .visit_count {
        font-size: 10px;
        color: #b4b4b4;
      }
    }
    .title {
      color: #888;
      font-size: 16px;
      text-align: center;
      @extend %textOverFlow;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .item-right {
    font-size: 10px;
    display: flex;
  }
}
</style>