import React, { useState } from 'react';

type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

type Props = {
  tarefas: Tarefa[];
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
};

const Input: React.FC<Props> = ({ tarefas, setTarefas }) => {
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    const titulo = novaTarefa.trim();
    if (titulo === '') return;

    const nova: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Campo de nova tarefa */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button
          onClick={adicionarTarefa}
          style={{
            padding: '10px 16px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Adicionar
        </button>
      </div>

      {/* Lista de tarefas */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} style={{ marginBottom: '10px' }}>
            <span
              style={{
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {tarefa.titulo}
            </span>
            <button
              onClick={() => alternarStatus(tarefa.id)}
              style={{
                backgroundColor: tarefa.concluida ? '#ff9800' : '#4caf50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '6px 10px',
                cursor: 'pointer',
              }}
            >
              {tarefa.concluida ? 'Desfazer' : 'Concluir'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
