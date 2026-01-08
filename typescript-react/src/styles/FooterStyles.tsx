import styled from "styled-components";
import facebookIcon from "../assets/icons/facebook.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import instaIcon from "../assets/icons/insta.svg";
import youtubeIcon from "../assets/icons/youtube.svg";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 32px 32px 108px;
  background-color: var(--gray900);

  @media (max-width: 767px) {
    padding: 32px 32px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 536px;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 59px 0;
    max-width: none;
  }
`;

export const CopyRight = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: var(--gray400);
  text-align: center;

  @media (max-width: 1200px) {
    color: var(--gray200);
  }

  @media (max-width: 767px) {
    order: 3;
    width: 100%;
    text-align: left;
  }
`;

export const PopupBox = styled.div`
  display: flex;
  gap: 30px;

  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--gray200);
  }

  @media (max-width: 767px) {
    order: 1;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 12px;

  a {
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &.facebook {
      background-image: url("${facebookIcon}");
    }

    &.twitter {
      background-image: url("${twitterIcon}");
    }

    &.insta {
      background-image: url("${instaIcon}");
    }

    &.youtube {
      background-image: url("${youtubeIcon}");
    }
  }

  @media (max-width: 767px) {
    order: 2;
  }
`;
