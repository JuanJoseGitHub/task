import './App.css';
import { useEffect , useState } from "react";
import EngadirTarefa from "./componentes/EngadirTarefa"
import AmosarTarefas from "./componentes/AmosarTarefas"

function App() {

  const [tarefas, setTarefas] = useState([])
  const [state, setState]=useState("")

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
    fetch("http://localhost:8000/tarefa/", { method: 'DELETE' }).then(() => this.setState({ status: 'Delete exitoso' })) 
    // const novasTarefas = [...tarefas]
    //  setTarefas(novasTarefas)
    //  console.log ({tarefas})
    
  }

  return (
    <>
    <main>
    <div><h2>Atarefado 1.0</h2></div>
    <button id="actualiza" onClick={ActualizaTarefas}>Actualiza TAREFAS🔄</button>
    <div>
    <EngadirTarefa funcionActualizarTarefas={ActualizaTarefas}/>
    </div>
    <div>
    <AmosarTarefas tarefas={tarefas}/>
    </div>
    <button id="borra" onClick={BorraTarefas}>Borra TAREFAS ¡Usar con cuidado!</button> 
    </main>
    </>
  );
}

export default App;