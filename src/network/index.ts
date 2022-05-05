import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import baseURL from './config';
import { getItem } from '../utils/local';
let isLoading = true;
let haveToken = true;
interface newAxiosRequestConfig extends AxiosRequestConfig {
  isLoading?: boolean;
  haveToken?: boolean;
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000
});

axiosInstance.interceptors.request.use(
  (config: newAxiosRequestConfig) => {
    isLoading = config.isLoading ?? true;
    haveToken = config.haveToken ?? true;
    if (haveToken) {
      config.headers!.token = getItem('token');
    }
    if (isLoading) {
      //组件的loading
      alert('加载中...');
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);
axiosInstance.interceptors.response.use(
  (res: newAxiosRequestConfig) => {
    if (isLoading) {
      //消失组件的loading
      alert('消失加载中...');
    }
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);
function request<T>(config: newAxiosRequestConfig) {
  return new Promise<T>((resolve, reject) => {
    axiosInstance
      .request<any, T>(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
async function get<T>(config: newAxiosRequestConfig) {
  return request<T>({ ...config, method: 'get', params: config.data });
}
function post<T>(config: newAxiosRequestConfig) {
  return request<T>({ ...config, method: 'post', data: config.data });
}
export { get, post };
