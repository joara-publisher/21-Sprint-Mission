import styled from "styled-components";

export const DropdownWrap = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
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
  background-color: var(--white);
  cursor: pointer;

  @media (max-width: 767px) {
    min-width: 42px;
    justify-content: center;
    padding: 0;
  }
`;

export const OptionList = styled.ul<{ $active: boolean }>`
  display: ${(props) => (props.$active ? "block" : "none")};
  position: absolute;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin-top: 8px;
  background-color: var(--white);
  border: 1px solid var(--gray200);
  border-radius: 12px;
  list-style: none;
  padding: 0;
  z-index: 10;

  @media (max-width: 767px) {
    right: 0;
    min-width: 130px;
    width: auto;
  }
`;

export const OptionItem = styled.li`
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
