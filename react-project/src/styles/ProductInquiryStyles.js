import styled from "styled-components";
import { Textarea } from "./FormCommonStyles";
import { DefaultButton } from "./ButtonStyles";
import moreVerticalIcon from "../assets/moreVerticalIcon.svg";

export const InquirySectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InquiryForm = styled.form`
  display: inline-block;
  width: 100%;
`;

export const InquiryFormTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 9px;

  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const InquiryFormTextarea = styled(Textarea)`
  height: 104px;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    height: 129px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const InquiryFormButton = styled(DefaultButton)`
  float: right;
`;

export const CommentWrap = styled.div`
  margin-bottom: 64px;

  @media (max-width: 1199px) {
    margin-bottom: 47px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const CommentItem = styled.li`
  position: relative;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gray300);

  & + & {
    margin-top: 24px;
  }

  @media (max-width: 1199px) {
    padding-bottom: 9px;
  }

  @media (max-width: 767px) {
    padding-bottom: 12px;
    & + & {
      margin-top: 16px;
    }
  }
`;

export const CommentTextarea = styled(Textarea)`
  height: 80px;
  margin-bottom: 23px;

  @media (max-width: 1199px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const CommentContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--gray800);
  margin-bottom: 24px;
`;

export const CommentProfileWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const CommentProfileImg = styled.img`
  width: 32px;
  height: 32px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 100%;
`;

export const CommentNicknameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CommentNickname = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--gray600);
`;

export const CommentDate = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--gray400);
`;

export const CommentMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CommentMenuButton = styled.button`
  width: 24px;
  height: 24px;
  background: url("${moreVerticalIcon}") no-repeat center / contain; // 이미지 안나와서 경로 옮김
`;

export const CommentOptionsMenu = styled.ul`
  z-index: 1;
  display: none;
  position: absolute;
  right: 0;
  width: 149px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 10px;
  background-color: var(--white);
  border: 1px solid var(--gray300);
  border-radius: 12px;

  &.active {
    display: block;
  }

  @media (max-width: 767px) {
    right: 0;
    width: 102px;
    font-size: 14px;
    line-height: 24px;
    margin-top: 11px;
    border-radius: 8px;
  }
`;

export const CommentUpdateMenu = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  display: flex;
  gap: 4px;
  padding: 2.5px 0;
  margin-top: -4.75px;
`;

export const CommentOption = styled.li`
  min-height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--gray300);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 767px) {
    min-height: 45px;
  }
`;

export const InquiryEmptyWrap = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--gray400);
  text-align: center;
  margin-bottom: 48px;
`;

export const InquiryEmpty = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
`;

export const InquiryEmptyImg = styled.img`
  @media (max-width: 1199px) {
    width: 140px;
  }
`;
