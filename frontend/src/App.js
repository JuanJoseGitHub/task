import './App.css';
import { useEffect , useState } from "react";


function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(
    ActualizaTarefas,
    []
  )

  function ActualizaTarefas() {
    fetch("http://localhost:8000/tarefa/").then(reaccionParaResposta)

  }

  function reaccionParaResposta(resposta){
    resposta.json().then(reaccionParaNovosDatos)
  }

  function reaccionParaNovosDatos(novosDatos){
    setTarefas(novosDatos)
  }

  return (
    <>
    <div>Atarefado 1.0</div>
    <button id="actualiza">Actualiza TAREFAS</button>
    
    </>
  );
}

export default App;
