import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: 70px;
  background-color: var(--white);
  border-bottom: 1px solid #dfdfdf;
  z-index: var(--header-z-index);
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1520px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;

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
  color: #4b5563;
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
  position: relative;
`;

export const ProfileImg = styled.button`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const KebabMenu = styled.div`
  display: none;
  position: absolute;
  right: 0;
  width: max-content;
  margin-top: 8px;
  background-color: var(--white);
  border: 1px solid var(--gray300);
  border-radius: 10px;

  &.isActive {
    display: block;
  }
`;

export const KebabButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  color: var(--gray500);
  text-align: center;
  padding: 16px 41.5px;
`;
