<template>
    <span class="category" :class="calcClass(data)[0]">
        {{calcClass(data)[1]}}
    </span>
</template>

<script>
export default {
    name: 'Category',
    props: [ 'data' ],
    methods: {
        calcClass(val){
            if(val.good){
                return ['salient', '精华']
            }else if(val.top){
                return ['salient', '置顶']
            }else if(val.tab === 'share'){
                return ['normal', '分享']
            }else if(val.tab === 'ask'){
                return ['normal', '问答']
            }
        },        
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.category{
    font-size: 12px;
    display: inline;
    padding: 2px 4px;  
    border-radius: $borderRadius;
    height: 18px;
    width: 32px;
    line-height: 12px;
    white-space: nowrap;
    margin: 0 10px;
    &.normal{
        background: $borderColor;
        color: #999;
    }
    &.salient{
        background: #80bd01;
        color: white;
    }
}
</style>