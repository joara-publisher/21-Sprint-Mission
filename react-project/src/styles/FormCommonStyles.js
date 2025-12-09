import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: var(--gray800);
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray800);
  padding: 16px 24px;
  border-radius: 12px;
  background-color: var(--gray100);
  
  &::placeholder {
    color: var(--gray400);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 282px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray800);
  padding: 16px 24px;
  border-radius: 12px;
  background-color: var(--gray100);
  resize: none;
  
  &::placeholder {
    color: var(--gray400);
  }
`;