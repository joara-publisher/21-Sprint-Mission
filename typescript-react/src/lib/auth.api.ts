import axios from "@/lib/axios";
import type { SignInValues, SignUpValues } from "@/types/auth";

export const postSignup = async (SignUpValues: SignUpValues) => {
  return await axios.post("/auth/signUp", SignUpValues);
};

export const postSignIn = async (SignInValues: SignInValues) => {
  return await axios.post("/auth/signIn", SignInValues);
};
