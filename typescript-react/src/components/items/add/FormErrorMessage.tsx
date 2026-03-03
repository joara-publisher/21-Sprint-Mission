import { ErrorMsg } from "@/styles/ItemFormStyles";
import type { ReactNode } from "react";

interface FormErrorMessageProps {
  children: ReactNode;
}

function FormErrorMessage({ children }: FormErrorMessageProps) {
  return <ErrorMsg>{children}</ErrorMsg>;
}

export default FormErrorMessage;
