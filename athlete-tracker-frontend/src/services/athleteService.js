import apiClient from '../api/apiClient';

const athleteService = {
  getAll: async () => {
    const response = await apiClient.get('/athletes');
    return response.data;
  },

  create: async (athlete) => {
    const response = await apiClient.post('/athletes', athlete);
    return response.data;
  },

  // optionally add update/delete if supported by backend
};

export default athleteService;
