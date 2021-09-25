<template>
  <div class="autherInof">

    <div class="authersummary">
      <basic-container>
        <template v-slot:header>
            作者
        </template>
      </basic-container>
    </div>

    <div class="recent_topics"></div>
      <basic-container>
        <template v-slot:header>
            作者其他话题
        </template>
      </basic-container>

    <div class="recent_relies">
      <basic-container>
        <template v-slot:header>
            无人回复的话题
        </template>
      </basic-container>      
    </div>
    

  </div>
</template>

<script>
  export default {
    name: 'PostListSlideBar',
  }
</script>

<style lang="scss" scoped>

</style>