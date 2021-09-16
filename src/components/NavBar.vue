<template>
    <div class="container">
        <div class="items-left">
            <img src="@/assets/cnodejs_light.svg" class="logo"/>
            <input type="text" class="search">
        </div>

        <ul class="items-right">
            <li><a href="https://cnodejs.org/">首页</a></li>
            <li><a href="https://cnodejs.org/getstart">新手入门</a></li>
            <li><a href="https://cnodejs.org/api">API</a></li>
            <li><a href="https://cnodejs.org/about">关于</a></li>
            <li><a href="https://cnodejs.org/signup">注册</a></li>
            <li><a href="https://cnodejs.org/signin">登录</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
    
}
</script>

<style lang="scss" scoped>
.container{
    min-height: 50px;
    background: #444444;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .items-left{
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        .logo{
            width: 120px;
            margin-left: 50px;
        }
        .search{
            margin-left: 20px;
            border-radius: 50px;
            border: none;
            text-indent: 1.5em;
            width: 235px;
        }
    }
    .items-right{
        font-size: 13px;
        color: #ccc;
        display: flex;
        li{
            padding: 10px 15px;
            white-space: nowrap;
        }
    }
}
</style>