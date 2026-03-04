import { Label, Input, ErrorMsg } from "@/styles/ItemFormStyles";
import { useId } from "react";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  field: ControllerRenderProps<T, Path<T>>;
  type?: "text" | "number";
  placeholder: string;
  error?: string | null;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormInput<T extends FieldValues>({
  label,
  field,
  type = "text",
  placeholder,
  error,
  onFocus,
  onChange,
}: InputProps<T>) {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...field}
        type={type}
        id={id}
        placeholder={placeholder}
        onFocus={(e) => {
          e.target.select();
          onFocus?.(e);
        }}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          } else {
            field.onChange(e);
          }
        }}
      />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </div>
  );
}
