<template>
	<el-container style="height: 100%;">
		<el-header>
			<Top></Top>
		</el-header>
		<el-container>
			<el-aside style="background-color: rgb(84, 92, 100);" width="260px">
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
	import Top from "./Top.vue";
</script>

<style>
</style>
