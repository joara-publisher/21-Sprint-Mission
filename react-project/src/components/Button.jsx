import { DefaultButton } from "../styles/ButtonStyles";

function Button({
  children,
  className,
  onClick,
  disabled = false,
  variant = "primary",
  withIcon = false,
  fontSizeVariant,
  paddingVariant,
  desktopOnly,
  mobileOnly,
}) {
  return (
    <DefaultButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $fontSizeVariant={fontSizeVariant}
      $paddingVariant={paddingVariant}
      $withIcon={withIcon}
      $desktopOnly={desktopOnly}
      $mobileOnly={mobileOnly}
    >
      {children}
    </DefaultButton>
  );
}

export default Button;
