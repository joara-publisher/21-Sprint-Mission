import {
  EasySigninButton,
  EasySigninButtons,
  EasySigninWrapper,
} from "../../styles/AuthStyles";

function EasySignin() {
  return (
    <EasySigninWrapper>
      간편 로그인하기
      <EasySigninButtons>
        <EasySigninButton
          to="https://www.google.com/"
          target="_blank"
          className="google"
        ></EasySigninButton>
        <EasySigninButton
          to="https://www.kakaocorp.com/page/"
          target="_blank"
          className="kakao"
        ></EasySigninButton>
      </EasySigninButtons>
    </EasySigninWrapper>
  );
}

export default EasySignin;
