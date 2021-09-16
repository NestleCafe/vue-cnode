<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components:{ NavBar},
}
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
body{
  background: #E1E1E1;
}
/*     &.router-link-exact-active {
      color: #42b983;
    } */

</style>
