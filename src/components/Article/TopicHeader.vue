<template>
  <div>
    <div class="topic_header">
      <div class="topic_title">
        <span class="Category"><Category :data="postData"></Category></span>
        <span class="title">{{ postData.title }}</span>
      </div>
      <ul class="articleInfo">
        <li>发布于 {{ timeToNow(postData.create_at) }}</li>
        <li>
          作者
          <a :href="'https://cnodejs.org/user/' + postData.loginname">
            {{ postData.author.loginname }}
          </a>
        </li>
        <li>{{ postData.visit_count }} 次浏览</li>
        <li>来自 {{ comeFrom }}</li>
      </ul>
    </div>
    <div class="topic_content" v-html="postData.content"></div>
  </div>
</template>

<script>
import Category from '@/components/Category'
import timeToNow from '@/utils/timeToNow'

export default {
    name:'Topic-Header',
    components: { Category },
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
.topic_header{
    background: #FFFFFF;
    padding: 10px;
    min-height: 64px;
    color: #333;
    font-size: 22px;
    font-weight: 700;
    margin-top: 8px;
    border-bottom: 1px solid #E5E5E5;
    border-radius: $borderRadius $borderRadius 0 0;
    .topic_title{
        display: flex;
        margin: 8px 0;
        position: relative;
        .Category{
            position: absolute;
        }
        .title{
            margin-left: 8px;
            text-indent: 1.5em;
            @extend %textOverFlow;
            -webkit-line-clamp: 2;
        }
    }
    .articleInfo{
        display: flex;
        li{
        font-size: 12px;
        color: #838383;
        font-weight: normal;            
            &::before{
                content: '•';
                margin: 0 5px;
            }
        }
    }  
}
.topic_content{
    background: white;
    padding: 10px;
}
</style>