<template>
  <div class="container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.container {
  margin-top: 20px;
  width: 100%;
  .header {
    border-radius: $borderRadius $borderRadius 0 0;
    min-height: 40px;
    background: #f6f6f6;
    padding: $globalPadding;
    display: flex;
    color: #444;
    border-bottom: 1px solid $borderColor;
  }
  .main{
    background: white;
    padding: $globalPadding;
    width: 100%;
  }
}

</style>