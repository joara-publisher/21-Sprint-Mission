import { Link, useLocation } from "react-router-dom";
import { Container, Header, Left, Logo, LogoDesktopImg, LogoMobileImg, MenuItemLink, MenuList, MyProfile, ProfileImg } from "../styles/NavStyles";
import logoImg from "../assets/logo.png";
import logoMoImg from "../assets/logoMo.png";

function Nav() {
  const location = useLocation();
  
  return (
    <Header>
      <Container>
        <Left>
          <Logo to="/items">
            <LogoDesktopImg src={logoImg} alt="판다마켓 pc 로고" />
            <LogoMobileImg src={logoMoImg} alt="판다마켓 mobile 로고" />
          </Logo>
          <MenuList>
            <li>
              <MenuItemLink
                to="/board"
                className={location.pathname === "/board" ? 'active' : ''}>
                자유게시판
              </MenuItemLink>
            </li>
            <li>
              <MenuItemLink
                to="/items"
                className={location.pathname === "/items" || location.pathname === "/additem" ? 'active' : ''}>
                중고마켓
              </MenuItemLink>
            </li>
            <li><Link to=""></Link></li>
          </MenuList>
        </Left>
        <div>
          {/* <Button classNames="button defaultButton" onClick={goToLogin}>로그인</Button> */}
          <MyProfile>
            <ProfileImg />
          </MyProfile>
        </div>
      </Container>
    </Header>
  )
}

export default Nav;