<template>
    <div class="article">
        <Loading v-if="isLoading"></Loading>

        <div class="content" v-else>
                <topic-header :postData="postData"></topic-header>
                <topic-reply :postData="postData"></topic-reply>

                
        </div>
    </div>
</template>

<script>
import { getArticleDate } from '@/api/index'
import Loading from '@/components/Loading'
import TopicHeader from '@/components/Article/TopicHeader'
import TopicReply from '@/components/Article/TopicReply'

export default {
    name: "Article",
    components: { Loading, TopicHeader, TopicReply },
    data(){
        return {
            isLoading: null,
            //当前文章页数据
            postData: {},
        }
    },
    methods: {
        async getArticleDate(id){
            this.isLoading = true
            const res = await getArticleDate(id)
            this.postData = res.data.data
            this.isLoading = false
        }, 
    },
    created() {
        this.getArticleDate(this.$route.params.id)
    },
}
</script>

<style lang="scss" scoped>
</style>