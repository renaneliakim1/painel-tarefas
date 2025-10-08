import React, { useState } from 'react';
import { Tarefa } from '../App';
import styles from './Input.module.css';

type Props = {
  tarefas: Tarefa[];
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
};

const Input: React.FC<Props> = ({ tarefas, setTarefas }) => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');

  const adicionarTarefa = () => {
    const titulo = novaTarefa.trim();
    if (titulo === '') return;

    const nova: Tarefa = {
      id: Date.now(),
      titulo,
      descricao,
      dataInicio,
      dataTermino,
      concluida: false,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
    setDescricao('');
    setDataInicio('');
    setDataTermino('');
  };

  const alternarStatus = (id: number) => {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const removerTarefa = (id: number) => {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.filter((tarefa) => tarefa.id !== id)
    );
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
        <input
          className={styles.input}
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
          placeholder="Data de início"
        />
        <input
          className={styles.input}
          type="date"
          value={dataTermino}
          onChange={(e) => setDataTermino(e.target.value)}
          placeholder="Data de término"
        />
        <button onClick={adicionarTarefa} className={styles.button}>
          Adicionar
        </button>
      </div>

      <ul className={styles.taskList}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className={styles.taskItem}>
            <div className={`${styles.taskDetails} ${tarefa.concluida ? styles.concluida : ''}`}>
              <h3 className={styles.taskTitle}>{tarefa.titulo}</h3>
              <p className={styles.taskDescription}>{tarefa.descricao}</p>
              <p className={styles.taskDate}>Início: {tarefa.dataInicio}</p>
              <p className={styles.taskDate}>Término: {tarefa.dataTermino}</p>
            </div>
            <button
              onClick={() => alternarStatus(tarefa.id)}
              className={`${styles.statusButton} ${tarefa.concluida ? styles.desfazer : styles.concluir}`}>
              {tarefa.concluida ? 'Desfazer' : 'Concluir'}
            </button>
            <button onClick={() => removerTarefa(tarefa.id)} className={styles.removeButton}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
