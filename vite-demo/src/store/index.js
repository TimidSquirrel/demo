import { createStore } from 'vuex'

const store = createStore({
	state(){
		return {
			userInfo: ''
		}
	},
	mutations: {
		getUserInfo(state){
			return this.state.userInfo;
		},
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo;
		}
	}
})

export default store;
