<template>
	<el-container style="height: 100%;">
		<el-header>Header</el-header>
		<el-container>
			<el-aside width="260px">
				<Aside></Aside>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup>
	import Aside from "./Aside.vue";
</script>

<style>
</style>
