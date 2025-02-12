import { FC } from "react";
import styles from "./Button.module.css";

interface Props {
  handleClick: () => void;
  children: React.ReactNode;
}

const Button: FC<Props> = ({ handleClick, children }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
