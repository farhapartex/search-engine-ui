import axiosInstance from '../config/api';

const searchService = {
  search: async (params) => {
    try {
      const response = await axiosInstance.post('/engine/search/', {
        query: params.query,
        platforms: params.platforms,
        max_results: params.maxResults,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  getSearchHistory: async () => {
    try {
      const response = await axiosInstance.get('/search/history');
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  saveSearchHistory: async (searchData) => {
    try {
      const response = await axiosInstance.post('/search/history', searchData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  deleteSearchHistory: async (searchId) => {
    try {
      const response = await axiosInstance.delete(`/search/history/${searchId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default searchService;
