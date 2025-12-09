import styled from "styled-components";

export const ItemListBox = styled.section`
  & + & {
    margin-top: 40px;
    @media (max-width: 767px) {
      margin-top: 24px;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const SearchSelectBox = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 767px) {
    justify-content: space-between;
    gap: 14px;
    width: 100%;
  }
`;