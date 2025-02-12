import React from "react";
import { FC, useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import { usePhrases } from "../../hooks/usePhrases";
import styles from "./PhraseList.module.css";

// interface Props {
//   title: string;
// }

const PhraseList: FC = () => {
  const { phrases, addPhrase, deletePhrase, filter, setFilter } = usePhrases();
  const [newPhrase, setNewPhrase] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.inputsContainer}>
        <div className={styles.addPhraseContainer}>
          <Input
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            placeholder="Agrega una frase"
          />
          <Button
            handleClick={() => {
              addPhrase(newPhrase);
              setNewPhrase("");
            }}
          >
            Agregar
          </Button>
        </div>
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar frases"
        />
      </div>

      {phrases.length === 0 && <p className={styles.text}>No hay frases</p>}
      <div>
        {phrases.map((phrase, index) => (
          <Card
            key={index}
            phrase={phrase}
            deletePhrase={() => deletePhrase(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhraseList;
