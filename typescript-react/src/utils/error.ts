import axios from "axios";

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    alert(error.response?.data?.message || "서버 응답 오류가 발생했습니다.");
  } else {
    alert("예상치 못한 에러가 발생했습니다.");
  }
};
