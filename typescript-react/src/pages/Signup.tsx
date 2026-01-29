import AuthHeader from "../components/auth/AuthHeader";
import AuthInput from "../components/auth/AuthInput";
import AuthPassword from "../components/auth/AuthPassword";
import EasySignin from "../components/auth/EasySignin";
import UserAuthForm from "../components/auth/UserAuthForm";
import useAuthForm from "../hooks/useAuthForm";
import {
  GotoLink,
  GotoLinkWrapper,
  UserAuthContainer,
  UserAuthWrapper,
} from "../styles/AuthStyles";

function Signup() {
  const { errors, handleChange, handleBlur, isFormValid } = useAuthForm([
    "email",
    "nickname",
    "password",
    "passwordVerify",
  ]);

  return (
    <UserAuthWrapper className="signup_page">
      <AuthHeader />
      <UserAuthContainer>
        <UserAuthForm
          formId="formSignup"
          fields={
            <>
              <AuthInput
                field="email"
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <AuthInput
                field="nickname"
                error={errors.nickname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <AuthPassword
                field="password"
                error={errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <AuthPassword
                field="passwordVerify"
                error={errors.passwordVerify}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </>
          }
          buttonText="회원가입"
          buttonUrl="/signin"
          isButtonActive={isFormValid}
        />
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
