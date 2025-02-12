import { useState, useEffect } from "react";

export const usePhrases = () => {
  const [phrases, setPhrases] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [debouncedFilter, setDebouncedFilter] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilter(filter);
    }, 1000);

    return () => clearTimeout(handler);
  }, [filter]);

  const addPhrase = (phrase: string) => {
    if (!phrase.trim()) {
      alert("No puedes agregar una frase vacía.");
      return;
    }
    setPhrases([...phrases, phrase]);
  };

  const deletePhrase = (index: number) => {
    setPhrases(phrases.filter((_, i) => i !== index));
  };

  const filteredPhrases = phrases.filter((phrase) =>
    phrase.toLowerCase().includes(debouncedFilter.toLowerCase())
  );

  return {
    phrases: filteredPhrases,
    addPhrase,
    deletePhrase,
    filter,
    setFilter,
  };
};
