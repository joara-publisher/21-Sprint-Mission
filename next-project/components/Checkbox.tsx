import styles from "@/components/Checkbox.module.css";
import { ChangeEvent, MouseEvent } from "react";

interface CheckboxProps {
  name?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  name,
  checked = false,
  onChange,
  onClick,
}: CheckboxProps) {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      onClick={onClick}
    />
  );
}
