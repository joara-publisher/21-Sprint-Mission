import { Link } from "react-router-dom";
import styled from "styled-components";
import UserAuthLogo from "../assets/images/login_signup_logo.png";
import LoginGoogleIcon from "../assets/icons/login_google.svg";
import LoginKakaoIcon from "../assets/icons/login_kakao.svg";
import EyeOffIcon from "../assets/icons/eye_off.svg";
import EyeONIcon from "../assets/icons/eye_on.svg";

export const UserAuthWrapper = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const UserAuthContainer = styled.div`
  max-width: 640px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 0 52px;
  }

  @media (max-width: 767px) {
    max-width: 400px;
    padding: 0 16px;
  }
`;

export const UserAuthHeader = styled(Link)`
  width: 396px;
  height: 132px;
  background: url("${UserAuthLogo}") no-repeat center / contain;
  margin: 60px 0 40px;

  @media (max-width: 1200px) {
    margin: 48px 0 40px;
  }

  @media (max-width: 767px) {
    width: 198px;
    height: 66px;
    margin: 24px 0;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & + & {
    margin-top: 24px;
  }

  @media (max-width: 767px) {
    gap: 8px;

    & + & {
      margin-top: 16px;
    }
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: var(--gray800);

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  font-weight: 400;
  font-size: 16px;
  line-height: 56px;
  color: var(--gray800);
  padding: 0 24px;

  background-color: var(--gray100);
  border: none;
  border-radius: 12px;

  &::placeholder {
    color: var(--gray400);
  }
  &:::-webkit-input-placeholder {
    color: var(--gray400);
  }
  &::-ms-input-placeholder {
    color: var(--gray400);
  }

  &.error {
    outline: none;
    border: 1px solid var(--red);
  }
`;

export const PasswordBox = styled.div`
  position: relative;
`;

export const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: url("${EyeOffIcon}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &.active {
    background-image: url("${EyeONIcon}");
  }
`;

export const ErrorMessage = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: var(--red);
  margin-top: -8px;
  padding-left: 16px;
`;

export const AuthFormButton = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: var(--gray100);
  margin-top: 24px;
  background-color: var(--blue);
  border-radius: 40px;

  &:disabled {
    background-color: var(--gray400);
  }

  @media (max-width: 767px) {
    margin-top: 16px;
  }
`;

export const EasySigninWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 74px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--gray800);
  padding: 24px 16px;
  margin-top: 24px;
  background-color: #e6f2ff;
  border-radius: 8px;
`;

export const EasySigninButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const EasySigninButton = styled(Link)`
  display: flex;
  gap: 16px;
  width: 42px;
  height: 42px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &.google {
    background-image: url("${LoginGoogleIcon}");
  }

  &.kakao {
    background-image: url("${LoginKakaoIcon}");
  }
`;

export const GotoLinkWrapper = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin-top: 24px;
`;

export const GotoLink = styled(Link)`
  color: var(--blue);
  text-decoration: underline;
  margin-left: 4px;
`;
