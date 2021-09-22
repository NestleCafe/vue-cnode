<template>
    <div class="loading">
        <img src="@/assets/loading.gif" />
    </div>
</template>

<script>
export default {
    name: "Loading",
}
</script>

<style lang="scss" scoped>
.loading{
    position: relative;
    img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 150px;
    }
}
</style>