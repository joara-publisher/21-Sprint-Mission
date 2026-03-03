import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Button from "./Button";
import {
  Container,
  Header,
  KebabButton,
  KebabMenu,
  Left,
  Logo,
  LogoDesktopImg,
  LogoMobileImg,
  MenuItemLink,
  MenuList,
  MyProfile,
  ProfileImg,
} from "../styles/NavStyles";
import logoImg from "../assets/images/logo.png";
import logoMoImg from "../assets/images/logo_mo.png";
import profileDefaultImg from "../assets/images/profile_default.png";

function Nav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Header>
      <Container>
        <Left>
          <Logo to="/">
            <LogoDesktopImg src={logoImg} alt="판다마켓 pc 로고" />
            <LogoMobileImg src={logoMoImg} alt="판다마켓 mobile 로고" />
          </Logo>
          {user && (
            <MenuList>
              <li>
                <MenuItemLink
                  to="/board"
                  className={location.pathname === "/board" ? "active" : ""}
                >
                  자유게시판
                </MenuItemLink>
              </li>
              <li>
                <MenuItemLink
                  to="/items"
                  className={
                    location.pathname === "/items" ||
                    location.pathname === "/additem"
                      ? "active"
                      : ""
                  }
                >
                  중고마켓
                </MenuItemLink>
              </li>
              <li>
                <Link to=""></Link>
              </li>
            </MenuList>
          )}
        </Left>
        <div>
          {user ? (
            <MyProfile>
              <ProfileImg
                onClick={() => setIsMenuOpen((prev) => !prev)}
                style={{
                  backgroundImage: `url(${user.image ? user.image : profileDefaultImg})`,
                }}
              />
              <KebabMenu className={isMenuOpen ? "isActive" : ""}>
                <ul>
                  <li>
                    <KebabButton onClick={logout}>로그아웃</KebabButton>
                  </li>
                </ul>
              </KebabMenu>
            </MyProfile>
          ) : (
            <Button
              className="button defaultButton"
              onClick={() => navigate("/signin")}
            >
              로그인
            </Button>
          )}
        </div>
      </Container>
    </Header>
  );
}

export default Nav;
