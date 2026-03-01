import React from 'react';
import type { Tarefa } from '../../App';
import styles from './TaskList.module.css';

type Props = {
  tarefas: Tarefa[];
  alternarStatus: (id: number) => void;
  removerTarefa: (id: number) => void;
};

const TaskList: React.FC<Props> = ({ tarefas, alternarStatus, removerTarefa }) => {
  return (
    <ul className={styles.taskList}>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={styles.taskItem}>
          <div
            className={`${styles.taskDetails} ${
              tarefa.concluida ? styles.concluida : ''
            }`}
          >
            <h3 className={styles.taskTitle}>{tarefa.titulo}</h3>
            <p className={styles.taskDescription}>{tarefa.descricao}</p>
            <p className={styles.taskDate}>Início: {tarefa.dataInicio}</p>
            <p className={styles.taskDate}>Término: {tarefa.dataTermino}</p>
          </div>
          <button
            onClick={() => alternarStatus(tarefa.id)}
            className={`${styles.statusButton} ${
              tarefa.concluida ? styles.desfazer : styles.concluir
            }`}
          >
            {tarefa.concluida ? 'Desfazer' : 'Concluir'}
          </button>
          <button
            onClick={() => removerTarefa(tarefa.id)}
            className={styles.removeButton}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
