import { NavLink } from "react-router-dom";
import styled from "styled-components";
import profileDefaultImg from "../assets/profileDefaultImg.png";

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: 70px;
  background-color: var(--white);
  border-bottom: 1px solid #DFDFDF;
  z-index: var(--header-z-index);
`; 
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 200px;
  
  @media (max-width: 1199px) {
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const Left = styled.div`
  display: flex;
  gap: 32px;
  
  @media (max-width: 767px) {
    gap: 8px;
  }
`;

export const Logo = styled(NavLink)`
  width: 153px;
  @media (max-width: 767px) {
    width: 81px;
  }
`;

export const LogoDesktopImg = styled.img`
  @media (max-width: 767px) {
    display: none; 
  }
`;

export const LogoMobileImg = styled.img`
  display: none; 
  
  @media (max-width: 767px) {
    display: block; 
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: 767px) {
    gap: 8px;
  }
`;

export const MenuItemLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  vertical-align: middle;
  color: #4B5563;
  padding: 0 15px;
  
  &.active {
    color: var(--blue);
  }
  
  @media (max-width: 767px) {
    font-size: 16px;
    padding: 0;
  }
`;

export const MyProfile = styled.div`

`;

export const ProfileImg = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(${profileDefaultImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;