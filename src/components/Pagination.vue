<template>
  <div class="pagination-wrapper">
    <ul class="Pagination">
      <li :class="{ active: page === 1 }"
        @click="$emit('update:currentPage', 1)"
      >«</li>
      <li class="more prefix" v-if="page > 3">...</li>
      <li
        v-for="(pageItem, index) in pageList"
        :key="index"
        :class="{ active: page === pageItem }"
        class="pageList"
        @click="changePage(pageItem)"
      >
        {{ pageItem }}
      </li>
      <li class="more suffix">...</li>
      <li>»</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["currentPage"],
  data() {
    return {
      pageList: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    changePage(pageItem) {
      if (this.page === pageItem) {
        return;
      } else {
        this.$emit("update:currentPage", pageItem);
      }
    },
  },
  computed: {
    page: {
      get: function () {
        return parseInt(this.currentPage);
      },
    },
  },
  watch: {
    currentPage:{
        handler(){
          /* 分页组件样式逻辑 */
          if (this.page > 2) {
            this.pageList[2] = this.page;
            this.pageList.splice(0, 2);
            this.pageList.splice(0, 0, this.page - 2, this.page - 1);
            this.pageList.splice(3, 2);
            this.pageList.splice(3, 0, this.page + 1, this.page + 2);
          } else if (this.page === 2 && this.page === 2) {
            this.pageList.splice(0, 0, 1);
            this.pageList.splice(4, 1);
          }          
        },
        immediate:true,
    },

    pageList :{
      deep: true,
      handler(){
        console.log('pageList:', this.pageList)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.pagination-wrapper {
  background: white;
  padding: 10px;
  margin-bottom: 20px;
  color: #778087;
  font-size: 14px;
  border-radius: 0 0 $borderRadius $borderRadius;
  .Pagination {
    display: inline-flex;
    border: 1px solid #dddddd;
    border-radius: $borderRadius;
    li {
      cursor: pointer;
      min-width: 30px;
      padding: 4px 12px;
      &:not(.active):not(.more):hover {
        background: #f5f5f5;
      }
      &.more {
        cursor: default;
      }
      &:not(:last-child) {
        border-right: 1px solid #dddddd;
      }
    }
    .active {
      &.pageList {
        color: #80bd01;
      }
      cursor: default;
    }
  }
  .jumpTo {
    margin-left: 10px;
    input {
      width: 45px;
      border: 1px solid #dddddd;
      box-shadow: none;
      text-align: center;
    }
    span {
      cursor: pointer;
      border: none;
      margin-left: 5px;
    }
  }
}
</style>