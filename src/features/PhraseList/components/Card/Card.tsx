import { FC } from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";

interface Props {
  phrase: string;
  onDelete: () => void;
}

const Card: FC<Props> = ({ phrase, onDelete }) => {
  return (
    <div className={styles.card}>
      <p>{phrase}</p>
      <Button onClick={onDelete}>❌</Button>
    </div>
  );
};

export default Card;
