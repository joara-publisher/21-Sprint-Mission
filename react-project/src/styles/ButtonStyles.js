import styled, { css } from "styled-components";

export const DefaultButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $withIcon }) => ($withIcon ? "8px" : "0")};

  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  padding: ${({$paddingVariant}) => 
    $paddingVariant ? $paddingVariant : "9.5px 20px"};

  color: var(--gray100);
  background-color: var(--blue);
  
  border-radius: ${({ $variant }) =>
    $variant === "rounded" ? "40px" : "8px"};
    
  &.ghost {
    background-color: var(--white);
    color: var(--gray500);
    &:hover {
      background-color: var(--white);
    }
  }
  
  &:disabled {
    background-color: var(--gray400) !important;
  }
  
  &:hover {
    background-color: var(--blue);
  }

  ${({ $desktopOnly }) =>
    $desktopOnly &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `}

  ${({ $mobileOnly }) =>
    $mobileOnly &&
    css`
      display: none;
      @media (max-width: 767px) {
        display: inline-flex;
      }
    `}
`;
