import { type ChangeEventHandler } from "react";
import { ErrorMessage, Input, InputWrap, Label } from "../../styles/AuthStyles";

type AuthInputField = "email" | "nickname";

interface AuthInputProps {
  field: AuthInputField;
  error: string | "";
  onChange: (field: AuthInputField, value: string) => void;
  onBlur: (field: AuthInputField) => void;
}

const AUTH_INPUT_FIELD_TEXT = {
  email: {
    label: "이메일",
    placeholder: "이메일을 입력해주세요",
    type: "email",
  },
  nickname: {
    label: "닉네임",
    placeholder: "닉네임을 입력해주세요",
    type: "text",
  },
} as const;

function AuthInput({ field, error, onChange, onBlur }: AuthInputProps) {
  const { label, placeholder, type } = AUTH_INPUT_FIELD_TEXT[field];

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(field, e.target.value);
  };

  const handleBlur = () => {
    onBlur(field);
  };

  return (
    <InputWrap>
      <Label htmlFor={field}>{label}</Label>
      <Input
        type={type}
        id={field}
        name={field}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      <ErrorMessage className={error ? "active" : ""}>{error}</ErrorMessage>
    </InputWrap>
  );
}

export default AuthInput;
