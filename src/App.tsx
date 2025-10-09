import { useReducer, useEffect, useCallback } from 'react';
import './App.css';

import Input from './Components/Input/Input';
import Header from './Components/Header/Header';
import ContadorTarefas from './Components/ContadorTarefas/ContadorTarefas';
import TaskList from './Components/TaskList/TaskList';

export type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  dataInicio: string;
  dataTermino: string;
  concluida: boolean;
};

type Action =
  | { type: 'ADD'; payload: { titulo: string; descricao: string; dataInicio: string; dataTermino: string; } }
  | { type: 'TOGGLE'; payload: { id: number } }
  | { type: 'REMOVE'; payload: { id: number } };

const tarefasReducer = (state: Tarefa[], action: Action): Tarefa[] => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          ...action.payload,
          concluida: false,
        },
      ];
    case 'TOGGLE':
      return state.map((tarefa) =>
        tarefa.id === action.payload.id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      );
    case 'REMOVE':
      return state.filter((tarefa) => tarefa.id !== action.payload.id);
    default:
      return state;
  }
};

function App() {
  const [tarefas, dispatch] = useReducer(tarefasReducer, [], () => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = useCallback((titulo: string, descricao: string, dataInicio: string, dataTermino: string) => {
    dispatch({
      type: 'ADD',
      payload: {
        titulo,
        descricao,
        dataInicio,
        dataTermino,
      },
    });
  }, []);

  const alternarStatus = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE', payload: { id } });
  }, []);

  const removerTarefa = useCallback((id: number) => {
    dispatch({ type: 'REMOVE', payload: { id } });
  }, []);

  return (
    <div className="container">
      <Header/>
      <Input adicionarTarefa={adicionarTarefa} />
      <ContadorTarefas tarefas={tarefas}/>
      <TaskList
        tarefas={tarefas}
        alternarStatus={alternarStatus}
        removerTarefa={removerTarefa}
      />
    </div>
  )
}

export default App;