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

function Signin() {
  const { errors, handleChange, handleBlur, isFormValid } = useAuthForm([
    "email",
    "password",
  ]);

  return (
    <UserAuthWrapper>
      <AuthHeader />
      <UserAuthContainer>
        <UserAuthForm
          formId="formSignin"
          fields={
            <>
              <AuthInput
                field="email"
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <AuthPassword
                field="password"
                error={errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </>
          }
          buttonText="로그인"
          buttonUrl="/items"
          isButtonActive={isFormValid}
        />
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
