import axios from "axios";
import { getUserMe, postSignIn } from "@/lib/auth.api";
import type { SignInValues, User } from "@/types/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [values, setValues] = useState<{
    user: User | null;
    isPending: boolean;
  }>({
    user: null,
    isPending: false,
  });
  const navigate = useNavigate();

  async function getMe() {
    setValues((prev) => ({
      ...prev,
      isPending: true,
    }));
    let nextUser: User;
    try {
      const res = await getUserMe();
      nextUser = res.data;
    } finally {
      setValues((prev) => ({
        ...prev,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function login(data: SignInValues) {
    try {
      const res = await postSignIn(data);
      const accessToken = res.data?.accessToken;
      localStorage.setItem("accessToken", accessToken);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "로그인 실패");
      } else {
        alert("알 수 없는 에러가 발생했습니다.");
      }
    }
    await getMe();
  }

  async function logout() {
    localStorage.removeItem("accessToken");
    setValues((prevValues) => ({
      ...prevValues,
      user: null,
    }));
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      getMe();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: values.user, isPending: values.isPending, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
