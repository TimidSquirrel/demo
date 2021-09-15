const state = {
	userInfo: {},
	menu: []
}

const mutations = {
	setUserInfo(userInfo) {
		state.userInfo = userInfo;
	},
	setMenu(menu) {
		state.menu = menu;
	},
	logout(){
		state.userInfo = {};
		state.menu = []
	}
}

const action = {}

export default {
	state,
	mutations,
	action
}
