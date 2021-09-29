<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="global-main">
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
.global-main{
  width: 80%;
  max-width: 1400px;
  margin: auto;
}
@media (max-width: 980px) {
    .global-main{
      width: 98%;
    }
}
</style>
