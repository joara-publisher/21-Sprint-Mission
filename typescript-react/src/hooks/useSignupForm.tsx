import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postSignup } from "../lib/auth.api";
import { signUpSchema, type SignUpValues } from "@/types/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useSignupForm() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "all", // onChange + onBlur 둘 다 발생 시 검증
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: SignUpValues) => {
    try {
      await postSignup(data);
      alert("회원가입이 완료되었습니다!");
      navigate("/signin");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "회원가입 실패");
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

export default useSignupForm;
