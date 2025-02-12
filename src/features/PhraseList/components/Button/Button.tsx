import { FC } from "react";
import styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
