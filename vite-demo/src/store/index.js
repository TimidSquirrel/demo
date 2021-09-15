import { createStore } from 'vuex'
import global from './modules/global'

const store = createStore({
	modules: {
		global
	}
})

export default store;
