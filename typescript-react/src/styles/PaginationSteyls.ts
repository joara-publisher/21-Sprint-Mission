import styled from "styled-components";

export const PaginationContainer = styled.div`
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
  list-style: none;
  padding: 0;
`;

export const PaginationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e7eb;
  border-radius: 40px;
  background-color: transparent;
  overflow: hidden;

  &.active {
    background-color: var(--blue);
  }
`;

export const PaginationButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 16px;
  color: var(--gray500);
  background: none;
  border: none;
  cursor: pointer;

  .active & {
    color: var(--white);
  }
`;

export const PrevButton = styled(PaginationItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled(PaginationItem)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transform: rotate(-180deg);
  }
`;
