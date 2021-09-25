<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  
  components:{ NavBar },
}
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body{
  background: $backgroundColor;
}
.main{
  width: 80%;
  min-width: 635px;
  margin: auto;
}
</style>
