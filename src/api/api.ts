import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


const axiosParams = {
  baseURL: process.env.REACT_APP_GIPHY_DEVELOPERS_API_URL,
  timeout: 5000,
};


const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => ({
  get: <T>(url: string, config: AxiosRequestConfig = {}) =>
    axios.get<T>(url, config),
  post: <T>(url: string, config: AxiosRequestConfig = {}) =>
    axios.post<T>(url, config),
  put: <T>(url: string, config: AxiosRequestConfig = {}) =>
    axios.put<T>(url, config),
  delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
    axios.delete<T>(url, config),
  patch: <T>(url: string, config: AxiosRequestConfig = {}) =>
    axios.patch<T>(url, config),
});

export default api(axiosInstance);
