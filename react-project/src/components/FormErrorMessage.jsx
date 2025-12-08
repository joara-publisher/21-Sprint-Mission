import styled from "styled-components";

function FormErrorMessage ({children}) {
  return (
    <ErrorMsg>
      {children}
    </ErrorMsg>
  )
}

export default FormErrorMessage;

const ErrorMsg = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--red);
  margin-top: 18px;
`;