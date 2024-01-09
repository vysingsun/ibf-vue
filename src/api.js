import axios from 'axios'
import store from './store/index';
const apiClient = axios.create({
  baseURL: 'http://13.54.181.188/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
console.log("knn"+store.getters['auth/getToken']);
// Add an interceptor to include the token in the request headers
apiClient.interceptors.request.use(
    function (config) {
        const token = store.getters['auth/getToken'];
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default {
  login(credentials) {
    return apiClient.post('/login', credentials)
  },
  getUserDate(credentials) {
    return apiClient.get('/user', credentials)
  },
  forgotPassword(credentials) {
    return apiClient.post('/forgot-password', credentials)
  },
  ResetPassword(credentials) {
    return apiClient.post('/reset-password', credentials)
  },
  
}