<template>
	<div class="login">
		<div class="logo">logo</div>
		<el-form ref="form" :model="form" :rules="rules">
			<el-form-item prop="userName">
				<el-input v-model="form.userName" prefix-icon="el-icon-user" placeholder="User"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="form.password" prefix-icon="el-icon-lock" type="password" placeholder="Password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="medium" round @click="submit">登 &nbsp; 录</el-button>
				<el-button type="primary" size="medium" round @click="toRegister">注 &nbsp; 册</el-button>
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
				},
				rules: {
					userName: [
						{
							required: true,
							trigger: ['change','blur'],
							message: '用户名不能为空',
						}
					],
					password: [
						{
							required: true,
							trigger: ['change','blur'],
							message: '密码不能为空',
						}
					],
				},
			}
		},
		methods: {
			submit() {
				this.$refs.form.validate((isValid) => {
					if(isValid) {
						login(this.form).then((res) => {
							if(res.code === 0) {
								console.log(res)
								// this.$store.commit('setUserInfo', res.data.userInfo)
								// this.$store.commit('setMenu', res.data.menuList)
								console.log(JSON.stringify(res.data.userInfo))
								localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
								localStorage.setItem('menuList', JSON.stringify(res.data.menuList))
								localStorage.setItem('token', res.data.token)
								this.$router.push('/')
							}
						})
					}
				})
			},
			toRegister() {
				this.$router.push('/register')
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
		background-color: #dbd5d5;
	}
	.logo{
		height: 100px;
	}
</style>
