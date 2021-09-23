<template>
    <div class="container">
        <Loading v-if="isLoading"></Loading>

        <ul class="postList" v-else>
            <li class="header">
                <p v-for="(item, index) in headerContent"
                    :key="index"
                    @click="handleClick(item, index)"
                    :class="{selected: headerIndex === index}"
                >
                    {{item.text}}
                </p>
            </li>

            <li class="content" v-for="item in postList" :key="item.id">
                <!-- 头像 -->
                <a :href="'https://cnodejs.org/user/'+item.author.loginname">
                    <img :src="item.author.avatar_url" :title="item.author.loginname">
                </a>

                <!-- 分类 -->
                <Category :data="item"></Category>

                <!-- 文字 -->
                <div class="text">
                    <router-link :to="`/topic/${item.id}`" 
                        :title="item.title"
                    >
                        <p class="title">{{item.title}}</p>
                    </router-link>
                    <div class="info">
                        <div class="item-left">
                            <p class="reply_count">{{item.reply_count}}</p>
                            <p>/</p>
                            <p class="visit_count">{{item.visit_count}}</p>
                        </div>

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
import { getPostList } from '@/api/index'
import headerContent from '@/utils/headerContent'
import Loading from '@/components/Loading'
import Category from '@/components/Category'
import timeToNow from '@/utils/timeToNow'

export default {
    name: 'PostList',
    components: { Loading, Category },
    data(){
        return{
            //是否加载
            isLoading: true,
            //列表头导航
            headerContent,
            //选中的列表头
            headerIndex: 0,
            //页面列表数据
            postList: [],

        }
    },
    methods: {
        timeToNow,
        async getPostList(tab){
            tab = tab || 'all'
            const res = await getPostList(tab)
            const data = res.data.data
            this.postList = data
            this.isLoading = false
        },
        handleClick(item, index){
            this.headerIndex = index
            /* this.getPostList(item.tab) */
        }
    },
    mounted() {
        this.getPostList('ask')
    },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.postList{
    margin: 20px auto 0 auto;
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
        &.selected{
            background: #80bd01;
            color: white;
            border-radius: $borderRadius;
        }
        &:not(.selected):hover{
            color: #005580;
        }
    }
}
.content{
    padding: 10px;
    height: 50px;
    border-bottom: 1px solid #F0F0F0;
    background: white;
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

    .text{
        margin-left: 10px;
        .title{
            color: #888; 
            text-align: center;

            @extend %textOverFlow;
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