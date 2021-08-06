import axios from 'axios';

const instance = axios.create({});

instance.interceptors.request.use(
    // Request 실행 직전
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            config.headers.Authorization = token;
        } else {
            console.log('No token');
        }
        config.headers['Content-Type'] = 'multipart/form-data';
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;