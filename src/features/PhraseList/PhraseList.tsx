import { FC } from "react";
import styles from "./PhraseList.module.css";

interface Props {
  title: string;
}

const PhraseList: FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {/* TODO: form */}
      <div>
        <input type="text" />
        <button>Agregar</button>
        <input type="text" />
      </div>
      {/* TODO: card */}
      <div className={styles.card}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem,
          quasi hic doloribus nostrum amet aliquam quos sapiente accusantium
          recusandae!
        </p>
      </div>
      <div className={styles.card}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea autem,
          quasi hic doloribus nostrum amet aliquam quos sapiente accusantium
          recusandae!
        </p>
      </div>
    </div>
  );
};

export default PhraseList;
