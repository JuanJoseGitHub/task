import './App.css';
import { useEffect , useState } from "react";
import EngadirTarefa from "./componentes/EngadirTarefa"
import AmosarTarefas from "./componentes/AmosarTarefas"
import BorrarTarefa from './componentes/BorrarTarefa';

function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(
    ActualizaTarefas,
    []
  )

  function ActualizaTarefas() {
    fetch("http://localhost:8000/tarefa/").then(reaccionResposta)
  }

  // Equivale a Const promesaDatos=resposta.json()
  // promesaDatos.then(ManexadorResposta)
  function reaccionResposta(resposta){
    resposta.json().then(reaccionNovosDatos)
  }

  function reaccionNovosDatos(novosDatos){
    setTarefas(novosDatos)
  }



  function BorraTarefas() {
    <BorrarTarefa/>
    console.log ("Tarefa borrada")
  }



  return (
    <>
    <div>Atarefado 1.0</div>
    <button id="actualiza" onClick={ActualizaTarefas}>Actualiza TAREFAS</button>
    <div>
    <EngadirTarefa funcionActualizarTarefas={ActualizaTarefas}/>
    </div>
    <div>
    <AmosarTarefas tarefas={tarefas}/>
    </div>
    <button id="borra" onClick={BorraTarefas}>Borra TAREFAS ¡Usar con cuidado!</button> 
    </>
  );
}

export default App;
