import apiClient from '../api/apiClient';

const performanceService = {
  getByAthlete: async (athleteId) => {
    const response = await apiClient.get(`/performance/athlete/${athleteId}`);
    return response.data;
  },

  add: async (performance) => {
    const response = await apiClient.post('/performance', performance);
    return response.data;
  },
};

export default performanceService;
