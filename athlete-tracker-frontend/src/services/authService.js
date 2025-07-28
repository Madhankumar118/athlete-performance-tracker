import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const register = async (username, password) => {
  return axios.post(`${API_URL}/register`, { username, password });
};

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data.token; // assuming backend returns { token: "..." }
};

const authService = {
  register,
  login,
};

export default authService;
