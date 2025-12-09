import styled from "styled-components";

export const SearchInputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 325px;
  height: 42px;
  padding: 9px 16px 9px 44px;
  border-radius: 12px;
  background-color: var(--gray100);
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: url('/public/searchIcon.svg') no-repeat center / 15px 15px; // 이미지 안나와서 경로 옮김
  }
  
  @media (max-width: 767px) {
    width: calc(100% - 14px - 42px);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  
  &:focus, &:active {
    outline: none;
    border: none;
  }
`;