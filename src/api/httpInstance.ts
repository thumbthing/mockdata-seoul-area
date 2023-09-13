import axios from 'axios';

const SERVER_URL = window.location.origin;

const DEFAULT_PARMAS = {};

const baseHeader = {
  baseURL: SERVER_URL,
  parmas: DEFAULT_PARMAS,
};

const httpInstance = axios.create(baseHeader);

httpInstance.interceptors.request.use((config) => {
  return config;
});

export default httpInstance;
