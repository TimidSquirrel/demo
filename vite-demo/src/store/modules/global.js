const state = {
	userInfo: {},
	menu: []
}

const mutations = {
	setUserInfo(userInfo) {
		state.userInfo = userInfo;
	},
	setMenu(menu) {
		console.log(menu)
		state.menu = menu;
	},
	logout(){
		state.userInfo = {};
		state.menu = [];
		localStorage.removeItem('menuList');
		localStorage.removeItem('token');
		localStorage.removeItem('userInfo');
	}
}

const action = {}

export default {
	state,
	mutations,
	action
}
