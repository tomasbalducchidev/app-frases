import { FC } from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";

interface Props {
  phrase: string;
  deletePhrase: () => void;
}

const Card: FC<Props> = ({ phrase, deletePhrase }) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{phrase}</p>
      <Button handleClick={deletePhrase}>Borrar</Button>
    </div>
  );
};

export default Card;
