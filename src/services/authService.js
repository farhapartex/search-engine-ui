import axiosInstance from '../config/api';


const authService = {

  signUp: async (userData) => {
    try {
      const response = await axiosInstance.post('/user/signup', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      if (response.data.token) {
        localStorage.setItem('fd_search_engine_token', response.data.token);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  },


  signIn: async (credentials) => {
    try {
      const response = await axiosInstance.post('/user/signin', {
        email: credentials.email,
        password: credentials.password,
      });

      // Save token to localStorage
      if (response.data.token) {
        localStorage.setItem('fd_search_engine_token', response.data.token);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  },


  signOut: async () => {
    try {
      const response = await axiosInstance.post('/user/signout');

      localStorage.removeItem('fd_search_engine_token');

      return response.data;
    } catch (error) {
      localStorage.removeItem('fd_search_engine_token');
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('/user/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },


  isAuthenticated: () => {
    return !!localStorage.getItem('fd_search_engine_token');
  },

  getToken: () => {
    return localStorage.getItem('fd_search_engine_token');
  },
};

export default authService;
