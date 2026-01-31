import { Controller } from "react-hook-form";
import AuthHeader from "../components/auth/AuthHeader";
import EasySignin from "../components/auth/EasySignin";
import {
  AuthFormButton,
  GotoLink,
  GotoLinkWrapper,
  UserAuthContainer,
  UserAuthWrapper,
} from "../styles/AuthStyles";
import AuthInput from "@/components/auth/AuthInput";
import AuthPassword from "@/components/auth/AuthPassword";
import useSigninForm from "@/hooks/useSigninForm";
import useAuth from "@/hooks/useAuth";

function Signin() {
  useAuth(true);
  const { control, handleSubmit, errors, isValid, onSubmit } = useSigninForm();

  return (
    <UserAuthWrapper>
      <AuthHeader />
      <UserAuthContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <AuthInput
                label="이메일"
                field={field}
                error={errors.email?.message}
                placeholder="이메일을 입력해주세요"
                type="email"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <AuthPassword
                label="비밀번호"
                field={field}
                error={errors.password?.message}
                placeholder="비밀번호를 입력해주세요"
              />
            )}
          />
          <AuthFormButton type="submit" disabled={!isValid}>
            로그인
          </AuthFormButton>
        </form>
        <EasySignin />
        <GotoLinkWrapper>
          판다마켓이 처음이신가요?
          <GotoLink to="/signup">회원가입</GotoLink>
        </GotoLinkWrapper>
      </UserAuthContainer>
    </UserAuthWrapper>
  );
}

export default Signin;
