<template>
    <div class="article">
        <Loading v-if="isLoading"></Loading>

        <div class="content" v-else>
            <div class="topic_header">
                <div class="topic_title">
                    <span class="Category"><Category :data="postData"></Category></span> 
                    <span class="title">{{postData.title}}</span>
                </div>
                <ul class="articleInfo">
                    <li>发布于 {{timeToNow(postData.create_at)}}</li>
                    <li>作者 
                        <a :href="'https://cnodejs.org/user/'+postData.loginname">
                            {{postData.author.loginname}}
                        </a>
                    </li>
                    <li>{{postData.visit_count}} 次浏览</li>
                    <li>来自 {{comeFrom}}</li>
                </ul>              
            </div>
           <div class="topic_content" v-html="postData.content"></div>

            <div class="topic_reply">
               <div class="header">{{postData.reply_count}} 回复</div>

               <div class="reply">
                   <ul>
                       <li v-for="(item, index) in postData.replies"
                        :key="index"
                       >   
                            <a :href="'https://cnodejs.org/user/'+item.author.loginname">
                                <img :src="item.author.avatar_url" :title="item.author.loginname">
                             </a>
                            <div class="userInfo">
                                <div class="item-left">
                                    <span class="author">
                                        <a :href="'https://cnodejs.org/user/'+item.author.loginname">
                                            {{item.author.loginname}}
                                        </a>
                                    </span>
                                    <span class="replyTime">
                                        {{index + 1}}楼• {{timeToNow(item.create_at)}}
                                    </span>                                
                                </div>
                                <div class="item-right">
                                    <img src="@/assets/up.svg">
                                    <span class="text">{{item.ups.length}}</span>
                                </div>
                            </div>
                            <div class="reply-content" v-html="item.content"></div>
                       </li>
                   </ul>
               </div>
            </div>   
        </div>
    </div>
</template>

<script>
import { getArticleDate } from '@/api/index'
import Loading from '@/components/Loading.vue'
import timeToNow from '@/utils/timeToNow'
import Category from '@/components/Category'

export default {
    name: "Article",
    components: { Loading, Category },
    data(){
        return {
            isLoading: true,
            //当前文章页数据
            postData: {}
        }
    },
    methods: {
        timeToNow,
        async getArticleDate(id){
            const res = await getArticleDate(id)
            this.postData = res.data.data
            this.isLoading = false
        }, 
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
    mounted() {
        this.getArticleDate(this.$route.params.id)
        console.log(this.$route.params.id)
    },
}
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

