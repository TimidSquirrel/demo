<template>
    <div class="register">
		<el-form ref="form" :model="form" :rules="rules" label-width="140px">
			<el-form-item label="用户名" prop="userName">
				<el-input v-model="form.userName"></el-input>
			</el-form-item>
			<el-form-item label="昵称" prop="nickName">
				<el-input v-model="form.nickName"></el-input>
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input v-model="form.email"></el-input>
			</el-form-item>
			<el-form-item label="邮箱验证码" prop="emailCode">
				<div class="email">
					<div class="email-code">
						<el-input v-model="form.emailCode"></el-input>
					</div>
					<div class="send-button">
						<el-button style="width: 100%" type="primary" :disabled="disabled" @click="sendEmailCode">{{buttonTexts}}</el-button>
					</div>
				</div>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="queryPassword">
				<el-input v-model="form.queryPassword"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="medium" round @click="login">登 &nbsp; 录</el-button>
				<el-button type="primary" size="medium" round @click="register">注 &nbsp; 册</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
    export default {
        name: "Register",
		data() {
        	return {
        		buttonTexts: '发送验证码',
				disabled: false,
        		form: {
        			userName: '',
					nickName: '',
					email: '',
					emailCode: '',
					password: '',
					queryPassword: ''
				},
				rules: {},
			};
		},
		methods: {
			sendEmailCode() {
				const _this = this;
				this.disabled = true;
				let time = 10;
				this.buttonTexts = `${time}  s`;
				const timer = setInterval(function () {
					if(time === 1) {
						_this.buttonTexts = '发送验证码';
						_this.disabled = false
						clearInterval(timer)
					}else {
						time = time - 1;
						_this.buttonTexts = `${time}  s`;
					}
				},1000)
			},
			login() {
				this.$router.push('/login')
			},
			register() {},
		},
    }
</script>

<style scoped>
.register{
	height: 100%;
	box-sizing: border-box;
	padding: 10% 84px 0 0;
	width: 700px;
	margin: 0 auto;
	background-color: #dee5de;
}
	.email{
		display: flex;
	}
	.email-code{
		flex: 1;
	}
	.send-button{
		width: 120px;
		margin-left: 5px;
	}
</style>
