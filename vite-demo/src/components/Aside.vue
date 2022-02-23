<template>
	<el-menu
		:uniqueOpened="true"
		default-active="2"
		class="el-menu-vertical-demo"
		@open="handleOpen"
		@close="handleClose"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
		:router="true"
	>
<!--		<el-sub-menu index="1">-->
<!--			<template #title>-->
<!--				<i class="el-icon-location"></i>-->
<!--				<span>导航一</span>-->
<!--			</template>-->
<!--			<el-menu-item-group>-->
<!--				<template #title>分组一</template>-->
<!--				<el-menu-item index="1-1">选项1</el-menu-item>-->
<!--				<el-menu-item index="1-2">选项2</el-menu-item>-->
<!--			</el-menu-item-group>-->
<!--		</el-sub-menu>-->
<!--		<el-sub-menu index="2">-->
<!--			<template #title>-->
<!--				<i class="el-icon-location"></i>-->
<!--				<span>导航一</span>-->
<!--			</template>-->
<!--			<el-menu-item-group>-->
<!--				<template #title>分组一</template>-->
<!--				<el-menu-item index="1-1">选项1</el-menu-item>-->
<!--				<el-menu-item index="1-2">选项2</el-menu-item>-->
<!--			</el-menu-item-group>-->
<!--		</el-sub-menu>-->
		<el-sub-menu v-for="item in menuList" :key="item.name">
			<template #title>
				<i class="el-icon-location"></i>
				<span>123</span>
			</template>
<!--			<el-menu-item v-for="obj in item.children" :index="obj.path">{{obj.title}}</el-menu-item>-->
		</el-sub-menu>
	</el-menu>
</template>

<script>
    import {handleMenuListToRoutes} from "../utils/util";

    export default {
        name: "Aside",
		data() {
        	return {
        		menuList: [],
			};
		},
		mounted() {
			this.init()
		},
		methods: {
      init() {
          handleMenuListToRoutes()
			},
			handleOpen(){},
			handleClose(){}
		}
    }
</script>

<style scoped>

</style>
