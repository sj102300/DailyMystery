
import axios from 'axios';

const host = window.location.hostname === "localhost" 
  ? 'http://43.202.161.19:8080'
  : "https://43.202.161.19:8080";

export const apiClient = axios.create({
  baseURL: host,
});