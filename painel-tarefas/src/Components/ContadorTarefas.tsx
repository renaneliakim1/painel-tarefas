import React from 'react';

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
        <div style={{ marginTop: '20px', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
            <p>✅ Tarefas concluídas: {concluidas}</p>
            <p>⏳ Tarefas pendentes: {pendentes}</p>
        </div>
    );
};

export default ContadorTarefas;
