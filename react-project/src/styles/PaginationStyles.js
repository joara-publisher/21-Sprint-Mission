import styled from "styled-components";

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 43px;
  margin-bottom: 58px;
  
  @media (max-width: 1199px) {
    margin-top: 40px;
    margin-bottom: 72px;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 35px;
  }
`;
    
export const PaginationList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const PaginationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #E5E7EB;
  border-radius: 40px;
  
  &.active {
    background-color: var(--blue);
    
    button {
      color: var(--white);
    }
  }
  
  &.prevItem, &.nextItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  &.nextItem img {
    transform: rotate(-180deg);
  }
`;
export const PaginationButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 16px;
  color: var(--gray500);
  
  
`;