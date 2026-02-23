import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInValues } from "@/types/auth";
import useAuth from "./useAuth";

function useSigninForm() {
  const { login } = useAuth();

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

  const onSubmit = (data: SignInValues) => {
    login(data);
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
