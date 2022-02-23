<template>
    <div>
		<el-form :model="form" ref="form" :inline="true" size="mini">
			<el-form-item label="用户名">
				<el-input v-model="form.userName"></el-input>
			</el-form-item>
			<el-form-item label="邮箱">
				<el-input v-model="form.email"></el-input>
			</el-form-item>
			<el-form-item label="昵称">
				<el-input v-model="form.nickName"></el-input>
			</el-form-item>
			<el-button type="primary" round @click="query">查询</el-button>
		</el-form>
	</div>
</template>

<script>
    export default {
        name: "User",
		data() {
        	return {
        		form: {},
			};
		},
		methods: {
        	query() {},
		},
    }
</script>

<style scoped>

</style>
