import { Label, Textarea, ErrorMsg } from "@/styles/ItemFormStyles";
import { useId } from "react";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface TextareaProps<T extends FieldValues> {
  label: string;
  field: ControllerRenderProps<T, Path<T>>;
  placeholder: string;
  error?: string | null;
}

export function FormTextarea<T extends FieldValues>({
  label,
  field,
  placeholder,
  error,
}: TextareaProps<T>) {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Textarea {...field} id={id} placeholder={placeholder} />
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </div>
  );
}
