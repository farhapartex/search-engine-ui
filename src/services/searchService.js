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


  getSearchHistory: async (limit) => {
    try {
      const response = await axiosInstance.get(`/engine/search/histories/?limit=${limit}`);
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
      const response = await axiosInstance.delete(`/engine/search/history/${searchId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default searchService;
