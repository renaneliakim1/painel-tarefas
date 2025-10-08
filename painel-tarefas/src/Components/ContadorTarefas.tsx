import React from 'react';
import styles from './ContadorTarefas.module.css';

type Tarefa = {
    id: number;
    titulo: string;
    concluida: boolean;
};

type Props = {
    tarefas: Tarefa[];
};

const ContadorTarefas: React.FC<Props> = ({ tarefas }) => {
    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = tarefas.length - concluidas;

    return (
        <div className={styles.container}>
            <p className={styles.text}>✅ Tarefas concluídas: {concluidas}</p>
            <p className={styles.text}>⏳ Tarefas pendentes: {pendentes}</p>
        </div>
    );
};

export default ContadorTarefas;
