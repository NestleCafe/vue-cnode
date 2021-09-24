<template>
  <div>
      <Loading v-if="isloading"></Loading>
      <div v-else>
          userInfo
          <ul>
              <li><icon name="homePage"/></li>
              <li><icon name="location"/></li>
              <li><icon name="github"/></li>
              <li><icon name="twitter"/></li>
          </ul>
      </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/index'
import Loading from '@/components/Loading'
/* import timeToNow from '@/utils/timeToNow' */
export default {
    name: 'userInfo',
    components: { Loading, },
    data(){
        return {
            isloading: null,
            userData: {},
        }
    },
    methods: {
        async getUserInfo(loginname){
            this.isLoading = true
            const res = await getUserInfo(loginname)
            this.userData = res.data.data
            console.log(this.userData)
        }
    },
    mounted() {
        this.getUserInfo(this.$route.params.loginname)
    },
};
</script>

<style lang="scss" scoped>
.icon{
    font-size: 19px;
    color: #999999;
    &:hover{
        color: #666666;
    }
}

</style>