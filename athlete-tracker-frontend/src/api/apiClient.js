import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
    headers: {
    'Content-Type': 'application/json',
    },
});

// Add interceptors to add auth token if needed
apiClient.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem('token'); // or from context
    if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    },
    (error) => Promise.reject(error)
);

export default apiClient;
