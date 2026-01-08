import type { MouseEventHandler, ReactNode } from "react";
import { AuthFormButton } from "../../styles/AuthStyles";
import { useNavigate } from "react-router-dom";

interface UserAuthFormProps {
  formId: string;
  fields: ReactNode;
  buttonText: string;
  buttonUrl: string;
  isButtonActive: boolean;
}

function UserAuthForm({
  formId,
  fields,
  buttonText,
  buttonUrl,
  isButtonActive,
}: UserAuthFormProps) {
  const navigate = useNavigate();

  const handleSubmitRedirect: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(buttonUrl);
  };

  return (
    <form id={formId} name={formId}>
      {fields}
      <AuthFormButton
        type="button"
        disabled={!isButtonActive}
        onClick={handleSubmitRedirect}
      >
        {buttonText}
      </AuthFormButton>
    </form>
  );
}

export default UserAuthForm;
