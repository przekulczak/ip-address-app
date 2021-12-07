import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.access_key = process.env.REACT_APP_API_KEY;
  return config;
});

export default instance;
