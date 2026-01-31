import { Controller } from "react-hook-form";
import AuthHeader from "../components/auth/AuthHeader";
import EasySignin from "../components/auth/EasySignin";
import AuthInput from "../components/auth/AuthInput";
import {
  AuthFormButton,
  GotoLink,
  GotoLinkWrapper,
  UserAuthContainer,
  UserAuthWrapper,
} from "../styles/AuthStyles";
import AuthPassword from "../components/auth/AuthPassword";
import useSignupForm from "../hooks/useSignupForm";
import useAuth from "@/hooks/useAuth";

function Signup() {
  useAuth(true);
  const { control, handleSubmit, errors, isValid, onSubmit } = useSignupForm();

  return (
    <UserAuthWrapper className="signup_page">
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
            name="nickname"
            control={control}
            render={({ field }) => (
              <AuthInput
                label="닉네임"
                field={field}
                error={errors.nickname?.message}
                placeholder="닉네임을 입력해주세요"
                type="nickname"
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
          <Controller
            name="passwordConfirmation"
            control={control}
            render={({ field }) => (
              <AuthPassword
                label="비밀번호 확인"
                field={field}
                error={errors.passwordConfirmation?.message}
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
            )}
          />
          <AuthFormButton type="submit" disabled={!isValid}>
            회원가입
          </AuthFormButton>
        </form>

        <EasySignin />
        <GotoLinkWrapper>
          이미 회원이신가요?
          <GotoLink to="/signin">로그인</GotoLink>
        </GotoLinkWrapper>
      </UserAuthContainer>
    </UserAuthWrapper>
  );
}

export default Signup;
