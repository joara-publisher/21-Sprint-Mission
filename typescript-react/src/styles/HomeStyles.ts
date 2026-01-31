import styled from "styled-components";
import bannerImg from "../assets/images/banner.png";
import bannerImg02 from "../assets/images/banner_02.png";

export const Section = styled.section`
  word-break: keep-all;
  overflow: hidden;

  .section_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    margin-bottom: 24px;
  }

  .section_category {
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    color: var(--blue);
    margin-bottom: 12px;
  }

  .section_desc {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .section_img img {
    height: 444px;
  }

  @media (max-width: 1200px) {
    padding-top: 84px;

    .section_title {
      font-size: 32px;
      line-height: 42px;

      br {
        display: none;
      }
    }

    .section_category {
      order: 1;
      margin-bottom: 16px;
    }

    .section_txt {
      order: 2;
    }

    .section_desc {
      font-size: 18px;
      line-height: 26px;
    }

    .section_img img {
      height: auto;
    }
  }

  @media (max-width: 767px) {
    padding-top: 48px;

    .section_title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 16px;
    }

    .section_desc {
      font-size: 16px;
    }
  }
`;

export const SectionInner = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const CommonInner = styled(SectionInner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
  max-width: 988px;
  padding: 138px 0;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: start;
    gap: 24px;
    max-width: none;
    padding: 24px 24px 28px;
  }

  @media (max-width: 767px) {
    padding: 20px 15px;
  }
`;

export const CommonContentBox = styled.div`
  max-width: 1150px;
  height: 340px;
  padding: 0 20px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center right;
  background-size: auto 100%;

  .section_title {
    max-width: 12ch;
    padding-top: 40px;
    margin-bottom: 32px;
  }

  .click_to_items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 357px;
    height: 56px;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: var(--gray50);
    border-radius: 40px;
    background-color: var(--blue);
  }

  @media (max-width: 1200px) {
    max-width: none;
    height: 687px;
    background-position: bottom;
    background-size: 100% auto;

    .section_title {
      max-width: 100%;
      font-size: 40px;
      line-height: 140%;
      text-align: center;
      padding-top: 0;
      margin-bottom: 24px;
    }

    .click_to_items {
      margin: 0 auto;
    }
  }

  @media (max-width: 767px) {
    height: 492px;

    .section_title {
      font-size: 32px;
      line-height: 140%;
      max-width: 12ch;
      margin: 0 auto 18px;
    }

    .click_to_items {
      width: 240px;
      height: 48px;
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

export const SectionBanner = styled(Section)`
  padding-top: 200px;
  background-color: #cfe5ff;

  ${CommonInner} {
    padding: 0;
  }

  ${CommonContentBox} {
    background-image: url("${bannerImg}");
  }

  @media (max-width: 767px) {
    padding-top: 48px;
  }
`;

export const SectionItems = styled(Section)`
  @media (max-width: 767px) {
    ${CommonInner} {
      padding-top: 52px;
    }
  }
`;

export const SectionSearch = styled(Section)`
  .section_txt {
    text-align: right;
  }

  @media (max-width: 1199px) {
    ${CommonInner} {
      align-items: end;
    }
  }
`;

export const SectionRegister = styled(Section)`
  @media (max-width: 1199px) {
    ${CommonInner} {
      padding-bottom: 56px;
    }
  }

  @media (max-width: 767px) {
    ${CommonInner} {
      padding-bottom: 52px;
    }
  }
`;

export const SectionBottom = styled(SectionBanner)`
  ${CommonContentBox} {
    background-image: url("${bannerImg02}");

    .section_title {
      padding-top: 122px;
      margin-bottom: 0;
    }
  }

  @media (max-width: 1200px) {
    padding-top: 201px;

    ${CommonContentBox} {
      height: 726px;

      .section_title {
        max-width: 12ch;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 767px) {
    padding-top: 121px;

    ${CommonContentBox} {
      .section_title {
        margin-bottom: 0;
      }
    }
  }
`;
