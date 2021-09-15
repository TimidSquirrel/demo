import {userInfo} from "./userInfo"

export default [
	{
		url: "/api/get",
		method: "get",
		response: ({query}) => {
			return {
				code: 0,
				data: {
					name: "vben",
				},
			};
		},
	},
	{
		url: "/api/login",
		method: "post",
		response: () => {
			return {
				code: 0,
				data: userInfo
			}
		}
	},
	{
		url: "/api/logout",
		method: "post",
		response: () => {
			return {
				code: 0,
				data: true
			}
		}
	}
];
