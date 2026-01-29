import { useState, type ChangeEventHandler } from "react";
import {
  ErrorMessage,
  EyeButton,
  Input,
  InputWrap,
  Label,
  PasswordBox,
} from "../../styles/AuthStyles";

type AuthPasswordField = "password" | "passwordVerify";

interface AuthPasswordProps {
  field: AuthPasswordField;
  error: string | "";
  onChange: (field: AuthPasswordField, value: string) => void;
  onBlur: (field: AuthPasswordField) => void;
}

const AUTH_PASSWORD_FIELD_TEXT = {
  password: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력해주세요",
    type: "password",
  },
  passwordVerify: {
    label: "비밀번호 확인",
    placeholder: "비밀번호를 다시 한 번 입력해주세요",
    type: "password",
  },
} as const;

function AuthPassword({ field, error, onChange, onBlur }: AuthPasswordProps) {
  const { label, placeholder, type } = AUTH_PASSWORD_FIELD_TEXT[field];
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(field, e.target.value);
  };

  const handleBlur = () => {
    onBlur(field);
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <InputWrap>
      <Label htmlFor={field}>{label}</Label>
      <PasswordBox>
        <Input
          type={isPasswordVisible ? "text" : type}
          id={field}
          name={field}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <EyeButton
          type="button"
          className={isPasswordVisible ? "active" : ""}
          onClick={handleTogglePasswordVisibility}
        />
      </PasswordBox>
      <ErrorMessage className={error ? "active" : ""}>{error}</ErrorMessage>
    </InputWrap>
  );
}

export default AuthPassword;
