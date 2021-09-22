<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="main">
      <post-list></post-list>
      </div>
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
.main{
  width: 80%;
  margin: auto;
}
/*     &.router-link-exact-active {
      color: #42b983;
    } */

</style>
