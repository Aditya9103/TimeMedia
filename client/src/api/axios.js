import axios from 'axios';
import { store } from '../store/store';
import { logout } from '../store/authSlice';

import config from '../config/env';

const api = axios.create({
  baseURL: `${config.apiUrl}/api`,
  withCredentials: true,
});

// Response Interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized globally (Token expiration or missing token)
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized access - logging out.');
      // Dispatch logout action to clear Redux state and local storage
      store.dispatch(logout());

      // Optionally redirect to login, handled via protected routes in App.jsx usually
      if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login';
      }
    }

    // Pass the error down so RTK Query can catch it
    return Promise.reject(error);
  }
);


export default api;
