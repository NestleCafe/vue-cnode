<template>
  <div id="app">
    <nav-bar></nav-bar>
    <post-list></post-list>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import PostList from './components/PostList'
export default {
  
  components:{ NavBar, PostList},
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
