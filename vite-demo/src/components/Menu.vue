<template>
  <div>
    <el-sub-menu v-for="item in menuList" :key="item.resourceNo">
      <template v-if="!item.children" #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
    </el-sub-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuList: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped></style>
