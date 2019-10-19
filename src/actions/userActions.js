import axios from "axios";
import { push } from "connected-react-router";
import {
	LOGIN_USER,
	AUTH_USER,
	REGISTER_USER,
	USER_SERVER,
	LOGOUT_USER,
	GET_ERRORS
} from "./types";
import authService from "../services/authService";
import axiosService from "../services/axiosService";
import {
	asyncActionStart,
	asyncActionFinish,
	asyncActionError
} from "./asyncActions";
import { endpoint, prodEndpoint } from "../config";
const URL = process.env.NODE_ENV === "development" ? endpoint : prodEndpoint;
const axiosInstance = axiosService.getInstance();

export function registerUser(dataToSubmit) {
	return dispatch => {
		axios
			.post(`${URL}api/v1/users/register?type=LOCAL`, dataToSubmit)
			.then(async response => {
				await authService.setToken(response.data.token);
				dispatch(push("/dash"));
			})
			.catch(err => {
				dispatch(push("/auth"));
				dispatch({
					type: GET_ERRORS,
					payload: err.response.data.err || "error in register"
				});
			});
	};
}

export function loginUser(dataToSubmit) {
	return dispatch => {
		axios
			.post(`${URL}api/v1/users/login`, dataToSubmit)
			.then(async response => {
				console.log("response", response);
				await authService.setToken(response.data.token);
				dispatch(push("/dash"));
			})
			.catch(err => {
				dispatch(push("/auth"));
				console.log("err", err);
				// dispatch({
				// 	type: GET_ERRORS,
				// 	payload: err.response.data.err || "error in login"
				// });
			});
	};
}

export function fbLogin(dataToSubmit, history) {
	return async dispatch => {
		try {
			dispatch(asyncActionStart());
			const response = await axios.post(
				`${URL}api/v1/users/fblogin`,
				dataToSubmit
			);

			if (response) {
				console.log(response.data.token);
				await authService.setToken(response.data.token);

				history.push("/user");
				dispatch(asyncActionFinish());
			}
		} catch (err) {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data.err || "error in login"
			});
		}
	};
}

export function auth() {
	return async dispatch => {
		try {
			const userData = await axiosInstance.get(
				`${URL}api/v1/users/auth?type=LOCAL`
			);
			// kick user out
			if (!userData.data.success) {
				dispatch(push("/auth"));
			}
			console.log("userData", userData);
			dispatch({
				type: AUTH_USER,
				payload: userData.data
			});
		} catch (err) {
			dispatch(push("/auth"));
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data.err || "error in login"
			});
		}
	};
}

export const logoutUser = () => dispatch => {
	localStorage.removeItem("auth_token");
	dispatch(push("/auth"));
};
