import React from 'react'

function BorrarTarefa({tarefas}) {

       return (
    <>
        {
            tarefas.map(
            tarefa=><li key={tarefa.id}>{tarefa.descripcion} <input type="checkbox" checked={tarefa.rematada}/></li>
            )
        }
    </>

  )
}

export default BorrarTarefa