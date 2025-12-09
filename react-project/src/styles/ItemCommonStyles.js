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