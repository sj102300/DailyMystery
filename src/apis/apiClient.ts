
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACK_PROXY,
});