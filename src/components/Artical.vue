<template>
    <div class="article">
        <Loading v-if="isLoading"></Loading>

        <div class="content" v-else>
            <div class="topic_header">
                <div class="title"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue'

export default {
    name: "Article",
    components: { Loading },
    data(){
        return {
            isLoading: true,
            //当前文章页数据
            postData: {}
        }
    },
}
</script>

<style lang="scss" scoped>

</style>