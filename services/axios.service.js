/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { API_BASE_URL } from '@/helper/path';
import ApiUrls from '../helper/ApiUrls';
import { TOKEN, REFRESH_TOKEN } from '../config/config';

export const CHAT_API = axios.create({
    baseURL: API_BASE_URL(),
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin": "*"
    },
});

export const API = axios.create({
    baseURL: API_BASE_URL(),
    timeout: 300000,
    headers: {
        // Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        'Content-Type': 'application/json',
    },
});
// export const FILE_API = axios.create({
//     baseURL: siteConfig.base_urls.api,
//     timeout: 300000,
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
//         'Content-Type': 'multipart/form-data',
//         // "Access-Control-Allow-Origin": "*"
//     },
// });

// Move the token retrieval inside the interceptor
API.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem(TOKEN);
            if (token) {
                // eslint-disable-next-line no-param-reassign
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const PUBLIC_API = axios.create({
    baseURL: API_BASE_URL(),
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// axios interceptor for refreshing access/id token
API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalConfig = error.config;
        if ((error?.response?.status === 401 || error?.response?.status === 403) && !originalConfig?._retry) {
            originalConfig._retry = true;
            try {
                const updateTokenRes = await PUBLIC_API.post(
                    `${ApiUrls.REFRESH_TOKEN}`,
                    { refresh: localStorage.getItem(REFRESH_TOKEN) },
                    { headers: { Authorization: `Bearer ${localStorage.getItem(REFRESH_TOKEN)}` } }
                );
                const { access } = updateTokenRes.data;
                localStorage.setItem(TOKEN, access);
                error.response.config.headers.Authorization = `Bearer ${access}`;
                return API(error.response.config);
            } catch (_error) {
                if (error.response.status === 401) {
                    localStorage.clear();
                    window.location.replace('/');
                }
                return Promise.reject(_error);
            }
        }
        return Promise.reject(error);
    }
);
