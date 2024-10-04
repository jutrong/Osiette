import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // 타임아웃 설정 (밀리초 단위)
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
request.interceptors.request.use(
  (config) => {
    // 요청 전에 수행할 작업
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
request.interceptors.response.use(
  (response) => {
    // 응답 데이터를 처리
    return response;
  },
  (error) => {
    // 에러 처리
    return Promise.reject(error);
  }
);

export default request;
