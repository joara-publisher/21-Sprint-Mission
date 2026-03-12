import styled from "styled-components";

export const ItemListWrap = styled.div`
  padding: 0 20px;
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 23px 0 0;
  margin: 0 auto;
`;

export const ItemListBox = styled.div`
  & + & {
    margin-top: 40px;
  }

  @media (max-width: 767px) {
    & + & {
      margin-top: 24px;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const ListTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: var(--gray900);
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
