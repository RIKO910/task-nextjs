import axios from 'axios';
import { AUTH_KEY } from '../constant/authConstant';
import {getAccessToken} from "@/src/action/authAction";

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.defaults.timeout = 60 * 1000; // 1 min

// request middleware
api.interceptors.request.use(function (config) {
    const accessToken = getAccessToken(AUTH_KEY); // Note: this is synchronous
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// response middleware
api.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    const config = error.config;

    if (error.response?.status === 401 && !config.sent) {
        config.sent = true;
        // handle token refresh here if needed
        return api(config);
    } else {
        console.log(error.response);
        return Promise.reject(error.response);
    }
});

export default api;
