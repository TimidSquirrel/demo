<template>
	<div>
		<el-button style="float: right;margin-top: 6px" @click="submit">退 出</el-button>
	</div>
</template>

<script>
	import {logout} from '../api/user.js'

	export default {
		name: "Top",
		methods: {
			submit() {
				logout().then(res => {
					if (res.code === 0) {
						localStorage.removeItem('token')
						this.$router.push('/login')
					}
				})
			}
		}
	}
</script>

<style scoped>

</style>
