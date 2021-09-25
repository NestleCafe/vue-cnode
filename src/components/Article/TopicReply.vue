<template>
  <div class="topic_reply">
    <div class="header">{{ postData.reply_count }} 回复</div>

    <div class="reply">
      <ul>
        <li v-for="(item, index) in postData.replies" :key="index">
          <router-link :to="`/user/${item.author.loginname}`">
            <img :src="item.author.avatar_url" :title="item.author.loginname" />
          </router-link>
          <div class="userInfo">
            <div class="item-left">
              <span class="author">
                <router-link :to="`/user/${item.author.loginname}`">
                  {{ item.author.loginname }}
                </router-link>
              </span>
              <span class="replyTime">
                {{ index + 1 }}楼• {{ timeToNow(item.create_at) }}
              </span>
            </div>
            <div class="item-right">
              <icon name="up"></icon>
              <span class="text">{{ item.ups.length }}</span>
            </div>
          </div>
          <div class="reply-content" v-html="item.content"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import timeToNow from "@/utils/timeToNow";

export default {
  name: "Topic-Reply",
  props: ["postData"],
  methods: {
    timeToNow,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.topic_reply {
  margin-top: 15px;
  border-radius: $borderRadius $borderRadius 0 0;
  .header {
    border-radius: $borderRadius $borderRadius 0 0;
    background: #f6f6f6;
    padding: $globalPadding;
    color: #444;
    font-size: 14px;
  }
  .reply {
    background: white;
    li {
      border-bottom: 1px solid $borderColor;
      padding: $globalPadding;
      min-height: 80px;
      position: relative;
      img {
        position: absolute;
        width: 30px;
        height: 30px;
      }
      .userInfo {
        margin-left: 40px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        .item-left {
          .author {
            font-weight: 700;
            color: #666;
          }
          .replyTime {
            color: #08c;
          }
        }
        .item-right {
          color: gray;
          font-size: 15px;
          .icon {
            font-size: 18px;
            margin-right: 5px;
          }
          /*  无法拖拽 */
          /* -webkit-user-drag: none; */
        }
      }
      .reply-content {
        margin-left: 40px;
        text-indent: 1em;
      }
    }
  }
}
.reply-content::v-deep img {
  /* 100% - padding - text-indent */
  max-width: calc(100% - 10px - 1em);
}
</style>