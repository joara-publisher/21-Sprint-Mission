import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  padding: 23px 24px 0;
  margin: 0 auto;
  
  @media (max-width: 767px) {
    padding: 17px 15px 0;
  }
`;

export const ListTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: var(--gray900);
`;

export const TagList = styled.ul`
  display: flex;
`;

export const Tag = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray800);
  padding: 5px 12px 5px 16px;
  background-color: var(--gray100);
  border-radius: 26px;
`;
