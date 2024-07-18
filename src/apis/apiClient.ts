
import axios from 'axios';

const host = window.location.hostname === "localhost" 
  ? import.meta.env.VITE_REACT_APP_BACK_URL
  : import.meta.env.VITE_REACT_APP_BACK_PROXY

export const apiClient = axios.create({
  baseURL: host,
});