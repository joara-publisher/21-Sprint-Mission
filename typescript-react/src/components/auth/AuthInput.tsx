import type { FieldValues } from "react-hook-form";
import type { AuthInputProps } from "../../types/auth";
import { ErrorMessage, Input, InputWrap, Label } from "../../styles/AuthStyles";

function AuthInput<T extends FieldValues>({
  label,
  field,
  error,
  placeholder,
  type = "text",
}: AuthInputProps<T>) {
  return (
    <InputWrap>
      <Label htmlFor={field.name}>{label}</Label>
      <Input {...field} type={type} id={field.name} placeholder={placeholder} />
      {error && <ErrorMessage className="active">{error}</ErrorMessage>}
    </InputWrap>
  );
}

export default AuthInput;
