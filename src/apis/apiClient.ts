
import axios from 'axios';

const host = window.location.hostname === "localhost" 
  ? 'http://43.202.161.19:8080'
  : "api";

export const apiClient = axios.create({
  baseURL: host,
});