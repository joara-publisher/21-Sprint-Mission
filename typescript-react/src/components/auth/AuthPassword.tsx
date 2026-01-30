import type { FieldValues } from "react-hook-form";
import type { AuthInputProps } from "../../types/auth";
import { useState } from "react";
import {
  ErrorMessage,
  EyeButton,
  Input,
  InputWrap,
  Label,
  PasswordBox,
} from "../../styles/AuthStyles";

function AuthPassword<T extends FieldValues>({
  label,
  field,
  error,
  placeholder,
}: AuthInputProps<T>) {
  const [showPw, setShowPw] = useState(false);

  return (
    <InputWrap>
      <Label htmlFor="password">{label}</Label>
      <PasswordBox>
        <Input
          {...field}
          type={showPw ? "text" : "password"}
          placeholder={placeholder}
        />
        <EyeButton
          type="button"
          className={showPw ? "active" : ""}
          onClick={() => setShowPw(!showPw)}
        />
      </PasswordBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrap>
  );
}

export default AuthPassword;
