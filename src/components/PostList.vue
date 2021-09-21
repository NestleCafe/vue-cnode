<template>
    <div class="container">

        <div class="loading" v-if="isLoading">
            <img src="@/assets/loading.gif" style="margin-top: 50vh; margin-left: 50vw;"/>
        </div>

    
        <ul class="postList" v-else>
            <li class="header">
                <p>全部</p>
                <p>精华</p>
                <p>分享</p>
                <p>问答</p>
                <p>招聘</p>
                <p>客户端测试</p>
            </li>

            <li class="content" v-for="item in postList" :key="item.id">
                <!-- 头像 -->
                    <a :href="'https://cnodejs.org/user/'+item.author.loginname">
                        <img :src="item.author.avatar_url" :title="item.author.loginname">
                    </a>

                <!-- 分类 -->
                <span class="classify" :class="calcClass(item)[0]">
                    {{calcClass(item)[1]}}
                </span>

                <!-- 文字 -->
                <div class="text">
                    <a :href="'https://cnodejs.org/topic/'+ item.id" :title="item.title">
                        <p class="title">{{item.title}}</p>
                    </a>
                    <div class="info">
                        <div class="item-left">
                            <p class="reply_count">{{item.reply_count}}</p>
                            <p>/</p>
                            <p class="visit_count">{{item.visit_count}}</p>
                        </div>

                        <a :href="'https://cnodejs.org/topic/'+ item.id" class="item-right">
                            {{ calcTime(item.last_reply_at) }}
                        </a>
                    </div>
                </div>
            </li>
        </ul>


    </div>
</template>

<script>
import { getPostList } from '@/api/index'

export default {
    data(){
        return{
            isLoading: true,
            //页面列表数据
            postList: [],
            postContent: [],
            dayjs: this.$dayjs
        }
    },
    methods: {
        async getPostList(){
            const res = await getPostList()
            const data = res.data.data
            this.postList = data
            this.isLoading = false
        },
        calcTime(date){
            return this.$dayjs(date).toNow().replace('内', '前')
        },
        calcClass(val){
            if(val.good){
                return ['abnormal', '精华']
            }else if(val.top){
                return ['abnormal', '置顶']
            }else if(val.tab === 'share'){
                return ['normal', '分享']
            }else if(val.tab === 'ask'){
                return ['normal', '问答']
            }
        },
    },
    computed: {

    },
    mounted() {
        this.getPostList()
    }
}
</script>

<style lang="scss" scoped>
$borderRadius: 3px;


.postList{
    margin: 20px auto 0 auto;
    width: 75vw;
    min-width: 635px;
}

.header{
    display: flex;
    font-size: 14px;
    padding: 10px;
    height: 40px;
    background: #F6F6F6;
    align-items: center;
    border-radius: $borderRadius;
    p{
        margin: 10px;
        padding: 3px 4px;
        color: #80bd01;

    }
    p:first-child{
        background: #80bd01;
        color: white;
        border-radius: $borderRadius;
    }
}
.content{
    padding: 10px;
    height: 50px;
    border-bottom: 1px solid #F0F0F0;
    background: #FFFFFF;
    display: flex;
    position: relative;
    &:hover{
        background: #F5F5F5;
    }
    img{
        width: 30px;
        margin-right: 10px;
        border-radius: $borderRadius;
    }
    .classify{
        font-size: 12px;
        display: inline;
        padding: 2px 4px;  
        border-radius: $borderRadius;
        height: 18px;
        display: flex;
        align-items: center;

        &.normal{
            background-color: #e5e5e5;
            color: #999;
        }
        &.abnormal{
            background: #80bd01;
            color: white;
        }
    }
    .text{
        margin-left: 10px;
        .title{
            color: #888; 
            text-align: center;

            /*弹性伸缩盒模型*/
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            /*限制一个块元素显示的文本行数*/
            -webkit-line-clamp: 1;
            /*设置伸缩盒对象的子元素排列方式*/
            -webkit-box-orient: vertical;
        }
        .info{
            font-size: 10px;
            display: flex;
            .item-left{
                p{
                    display: inline-block;
                }
                .reply_count{
                    color: #9e78c0;
                    }
                .visit_count{
                    color:#b4b4b4;
                }
            }
            .item-right{
                position: absolute;
                right: 10px;
                font-size: 10px;
                color: #778087;
            }  
        }
    }
}
    


</style>