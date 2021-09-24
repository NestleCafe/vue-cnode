<template>
  <div class="topic_reply">
    <div class="header">{{ postData.reply_count }} 回复</div>

    <div class="reply">
      <ul>
        <li v-for="(item, index) in postData.replies" :key="index">
          <a :href="'https://cnodejs.org/user/' + item.author.loginname">
            <img :src="item.author.avatar_url" :title="item.author.loginname" />
          </a>
          <div class="userInfo">
            <div class="item-left">
              <span class="author">
                <a :href="'https://cnodejs.org/user/' + item.author.loginname">
                  {{ item.author.loginname }}
                </a>
              </span>
              <span class="replyTime">
                {{ index + 1 }}楼• {{ timeToNow(item.create_at) }}
              </span>
            </div>
            <div class="item-right">
              <img src="@/assets/up.svg" />
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
import timeToNow from '@/utils/timeToNow'

export default {
    name:'Topic-Reply',
    props: [ 'postData' ],
    data() {
        return {
        }
    },
    methods: {
        timeToNow,        
    },
    computed: {
        comeFrom(){
            const tab = this.postData.tab
            if(tab === 'share'){
                return '分享'
            }else if(tab === 'ask'){
                return '问答'
            }else{
                return null
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.topic_reply{
    margin-top: 15px;
    border-radius: $borderRadius $borderRadius 0 0;
    .header{
        border-radius: $borderRadius $borderRadius 0 0;
        background: #F6F6F6;
        padding: 10px;
        color: #444;
        font-size: 14px;
    }
    .reply{
        background: white;
        li{
            border-bottom: 1px solid $borderColor;
            padding: 10px;
            min-height: 80px;
            position: relative;
            img{
                position: absolute;
                width: 30px;
                height: 30px;
            }
            .userInfo{
                margin-left: 40px;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                .item-left{
                    .author{
                        font-weight: 700;
                        color: #666;
                    }
                    .replyTime{
                        color: #08c;
                    }                    
                }
                .item-right{
                    color: gray;
                    font-size: 15px;
                    img{
                        text-align: center;
                        /*  无法拖拽 */
                        -webkit-user-drag: none;
                        width: 18px;
                        display: block;
                        margin-top: -6px;
                        margin-left: -20px;
                    }
                }
            }
            .reply-content{
                margin-left: 40px;
                text-indent: 1em;
            }
        }
    }
}
</style>