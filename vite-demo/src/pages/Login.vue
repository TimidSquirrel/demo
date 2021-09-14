<template>
	<div class="login">
		<div class="logo">logo</div>
		<el-form :model="form">
			<el-form-item>
				<el-input v-model="form.userName" placeholder="User"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="form.password" type="password" placeholder="Password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="middle" round @click="submit">登 &nbsp; 录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import {login} from '../api/user'

	export default {
		name: 'Login',
		data() {
			return {
				form: {
					userName: '',
					password: ''
				}
			}
		},
		methods: {
			submit() {
				login(this.form).then(res => {
					if(res.code === 0) {
						this.$store.commit('setUserInfo', res.data.userInfo)
						localStorage.setItem('token', res.data.token)
						this.$router.push('/')
					}
				})
			}
		}
	}
</script>

<style scoped>
	.login{
		box-sizing: border-box;
		width: 500px;
		height: 400px;
		padding: 20px 50px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -200px;
		margin-left: -250px;
		border: 1px solid #ccc;
		border-radius: 20px;
		box-shadow: 0 0 10px #cccccc;
	}
	.logo{
		height: 100px;
	}
</style>
