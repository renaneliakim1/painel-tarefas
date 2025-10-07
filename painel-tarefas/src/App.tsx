import { useState } from 'react'
import './App.css'

import Input from './Components/Input';
import Header from './Components/header';
import ContadorTarefas from './Components/contadorTarefas';

type Tarefa = {
  id: number;
  titulo: string;
  concluida: boolean;
};

function App() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);


  return (
    <div>
      <Header/>
      <Input tarefas={tarefas} setTarefas={setTarefas} />
      <ContadorTarefas tarefas={tarefas}/>
    </div>
  )
}

export default App;
