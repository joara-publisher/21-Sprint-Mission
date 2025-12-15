import styled from "styled-components";

export const ButtonWrap = styled.div`
  text-align: center;
  margin-bottom: 222px;
  
  @media (max-width: 1199px) {
    margin-bottom: 243px;
  }
  @media (max-width: 767px) {
    margin-bottom: 65px;
  }
`;

export const Divider = styled.div`
  margin: 40px 0;
  border-bottom: 1px solid var(--gray200);
  
  @media (max-width: 1199px) {
    margin: 32px 0 40px;
  }
  @media (max-width: 767px) {
    margin: 24px 0;
  }
`;