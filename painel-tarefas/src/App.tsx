import { useState, useEffect } from 'react';
import './App.css'

import Input from './Components/Input';
import Header from './Components/header';
import ContadorTarefas from './Components/contadorTarefas';

export type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  dataInicio: string;
  dataTermino: string;
  concluida: boolean;
};

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <div className="container">
      <Header/>
      <Input tarefas={tarefas} setTarefas={setTarefas} />
      <ContadorTarefas tarefas={tarefas}/>
    </div>
  )
}

export default App;
