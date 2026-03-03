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

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: var(--gray800);
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  margin-bottom: 59px;

  @media (max-width: 1199px) {
    margin-bottom: 78px;
  }
  @media (max-width: 767px) {
    margin-bottom: 70px;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgWrap = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 10px;
  }
`;

export const ImgPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  width: 282px;
  height: 282px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray400);
  border-radius: 12px;
  background-color: var(--gray100);
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
  @media (max-width: 767px) {
    width: calc((100vw - (24px * 2) - 10px) / 2);
    height: calc((100vw - (24px * 2) - 10px) / 2);
  }
`;

export const ImgPreview = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
  @media (max-width: 767px) {
    width: calc((100vw - (24px * 2) - 10px) / 2);
    height: calc((100vw - (24px * 2) - 10px) / 2);
  }

  button {
    position: absolute;
    width: 22px;
    height: 24px;
    top: 12px;
    right: 12px;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--red);
  margin-top: 18px;
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

export const TagList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const Tag = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray800);
  margin-top: 14px;
  padding: 5px 12px 5px 16px;
  background-color: var(--gray100);
  border-radius: 26px;
`;
