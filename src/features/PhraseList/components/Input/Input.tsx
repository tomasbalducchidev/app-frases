import { FC } from "react";
import styles from "./Input.module.css";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={120}
    />
  );
};

export default Input;
