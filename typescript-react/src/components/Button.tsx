import type { MouseEventHandler, ReactNode } from "react";
import { DefaultButton } from "@/styles/ButtonStyles";

interface ButtonProps {
  children: ReactNode;
  className: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: "primary" | "rounded";
  withIcon?: boolean;
  fontSizeVariant?: "sm" | "md";
  paddingVariant?: "default";
  desktopOnly?: boolean;
  mobileOnly?: boolean;
}

function Button({
  children,
  className,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  withIcon = false,
  fontSizeVariant,
  paddingVariant,
  desktopOnly,
  mobileOnly,
}: ButtonProps) {
  return (
    <DefaultButton
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      fontSizeVariant={fontSizeVariant}
      paddingVariant={paddingVariant}
      $withIcon={withIcon}
      $desktopOnly={desktopOnly}
      $mobileOnly={mobileOnly}
    >
      {children}
    </DefaultButton>
  );
}

export default Button;
