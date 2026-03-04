import axios, { type InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  timeout: 15000,
});

// 요청 인터셉터: 모든 요청에 accessToken 자동 첨부
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const token = (localStorage.getItem("accessToken") ?? "").trim();
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 401 발생시 자동 로그아웃
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined") {
      if (error.response?.status === 401) {
        console.log("토큰 만료 or 인증 실패 로 자동로그아웃 됩니다");

        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
