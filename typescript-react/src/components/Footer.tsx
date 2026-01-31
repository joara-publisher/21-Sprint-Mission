import { Link } from "react-router-dom";
import {
  Container,
  CopyRight,
  FooterWrapper,
  LinkBox,
  PopupBox,
} from "../styles/FooterStyles";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <CopyRight>©codeit - 2024</CopyRight>
        <PopupBox className="popup_box">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </PopupBox>
        <LinkBox className="link_box">
          <Link
            to="https://www.facebook.com/"
            className="facebook"
            target="_blank"
          ></Link>
          <Link to="https://x.com/" className="twitter" target="_blank"></Link>
          <Link
            to="https://www.instagram.com/"
            className="insta"
            target="_blank"
          ></Link>
          <Link
            to="https://www.youtube.com/"
            className="youtube"
            target="_blank"
          ></Link>
        </LinkBox>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
