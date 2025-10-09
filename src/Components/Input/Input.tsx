import React, { useState } from "react";
import styles from "./Input.module.css";

type Props = {
  adicionarTarefa: (titulo: string, descricao: string, dataInicio: string, dataTermino: string) => void;
};

const Input: React.FC<Props> = ({ adicionarTarefa }) => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataTermino, setDataTermino] = useState("");

  const handleAdicionarTarefa = () => {
    const titulo = novaTarefa.trim();
    if (titulo === "") return;

    if (dataInicio && dataTermino && dataTermino < dataInicio) {
      alert("A data de término não pode ser anterior à data de início.");
      return;
    }

    adicionarTarefa(titulo, descricao, dataInicio, dataTermino);

    setNovaTarefa("");
    setDescricao("");
    setDataInicio("");
    setDataTermino("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          className={styles.input}
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <input
          className={styles.input}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da tarefa"
        />
        <div className={styles.date}>
          <label htmlFor="">Início</label>
          <input
            className={styles.input}
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
            placeholder="Data de início"
          />
          <label htmlFor="">Término</label>

          <input
            className={styles.input}
            type="date"
            value={dataTermino}
            onChange={(e) => setDataTermino(e.target.value)}
            placeholder="Data de término"
          />
        </div>
        <button onClick={handleAdicionarTarefa} className={styles.button}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Input;