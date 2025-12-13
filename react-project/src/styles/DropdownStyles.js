import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  color: var(--gray800);
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 130px;
  min-height: 42px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  padding: 7px 20px;
  border: 1px solid var(--gray200);
  border-radius: 12px;
  
  @media (max-width: 767px) {
    min-width: 42px;
    justify-content: center;
    padding: 0;
  } 
`;

export const OptionList = styled.ul`
  display: none;
  position: absolute;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 8px;
  background-color: var(--white);
  border: 1px solid var(--gray200);
  border-radius: 12px;
  
  &.active {
    display: block;
  }
  
  @media (max-width: 767px) {
    right: 0;
    min-width: 130px;
  }
`;

export const Option = styled.li`
  min-height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--gray200);
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
`;
