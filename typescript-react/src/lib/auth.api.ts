import axios from "@/lib/axios";
import type { SignInValues, SignUpValues } from "@/types/auth";

export const postSignup = async (SignUpValues: SignUpValues) => {
  return await axios.post("/auth/signUp", SignUpValues);
};

export const postSignIn = async (SignInValues: SignInValues) => {
  return await axios.post("/auth/signIn", SignInValues);
};

export const getUserMe = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await axios.get("/users/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
