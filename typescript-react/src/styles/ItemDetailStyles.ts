import styled from "styled-components";
import { TagList } from "@/styles/ItemFormStyles";
import heartDefault from "@/assets/icons/heart_default.svg";
import heartActive from "@/assets/icons/heart_active.svg";

export const DetailWrap = styled.div`
  display: flex;
  gap: 24px;
  padding: 5px 0;

  @media (max-width: 1199px) {
    gap: 16px;
    padding: 0;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const DetailImg = styled.img`
  width: 486px;
  height: 486px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 28.59px;

  @media (max-width: 1199px) {
    width: 340px;
    height: 340px;
    border-radius: 20px;
  }

  @media (max-width: 767px) {
    width: 100vw;
    height: auto;
    border-radius: 12px;
  }
`;

export const DetailTxtWrap = styled.div`
  flex-grow: 1;
`;

export const DetailTxtTop = styled.div`
  color: var(--gray800);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray200);
`;

export const DetailName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;

  @media (max-width: 1199px) {
    font-size: 20px;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const DetailPrice = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;

  @media (max-width: 1199px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const DetailInfoList = styled.dl`
  color: var(--gray600);
  padding-top: 24px;

  @media (max-width: 1199px) {
    padding-top: 16px;
  }
`;

export const DetailInfoTitle = styled.dt`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 16px;

  @media (max-width: 1199px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 8px;
  }
`;

export const DetailDesc = styled.dd`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  & + dt {
    margin-top: 24px;
  }
`;

export const LocalTagList = styled(TagList)`
  gap: 8px;
`;

export const DetailTxtBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 62px;

  @media (max-width: 1199px) {
    margin-top: 40px;
  }
`;

export const DetailOwnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DetailOwnerImg = styled.img`
  width: 40px;
  height: 40px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 100%;
`;

export const DetailNicknameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DetailOwnerNickname = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--gray600);
`;
export const DetailDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--gray400);
`;

export const DetailFavoritButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 35px;
  border: 1px solid var(--gray200);

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -24px;
    transform: translateY(-50%);
    width: 1px;
    height: calc(100% - 6px);
    background-color: var(--gray200);
  }
`;

export const DetailFavoritImg = styled.span`
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("${heartDefault}");

  &:hover {
    background-image: url("${heartActive}");
  }

  @media (max-width: 1199px) {
    width: 24px;
    height: 24px;
  }
`;

export const DetailFavoritCount = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--gray500);
`;
