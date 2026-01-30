import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postSignIn } from "../lib/auth.api";
import { signInSchema, type SignInValues } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useSigninForm() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signInSchema),
    mode: "all", // onChange + onBlur 둘 다 발생 시 검증
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInValues) => {
    try {
      await postSignIn(data);
      // 토큰 저장 추가 필요
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "로그인 실패");
      } else {
        alert("알 수 없는 에러가 발생했습니다.");
      }
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
  };
}

export default useSigninForm;
