<template>
    <div class="container">
        <div class="items-left">
            <router-link :to="'/'"><img src="@/assets/cnodejs_light.svg" class="logo"/></router-link>
            <!-- <form method="get" action="https://www.google.com.hk/search" >
                <input name="q" type="text" class="search">
            
            </form> -->
            <!-- {{site:cnodejs.org}} -->
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
@import "~@/assets/style/helper.scss";
.container{
    min-height: 50px;
    background: #444444;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .items-left{
        padding: $globalPadding 0;
        display: flex;
        justify-content: space-between;
        .logo{
            width: 120px;
            margin-left: 50px;
            /*  无法拖拽 */
            -webkit-user-drag: none;
        }
        .search{
            margin-left: 20px;
            border-radius: 50px;
            border: none;
            /* text-indent: 1.5em; */
            width: 233px;
            height: 26px;
            /* background: #888888; */
            padding: 3px 5px 3px 22px ;
        }
    }
    .items-right{
        font-size: 13px;
        color: #ccc;
        display: flex;
        li{
            padding: $globalPadding 15px;
            white-space: nowrap;
        }
    }
}

/* @keyframes colorChange{
    from{
        background: #888888;
    }
    to{
        background: white;
    }
} */
</style>