import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

const tarefas = [
    {
        id: 0,
        descripcion: "Unha tarefa de exemplo",
        rematada: true,
    },
    {
        id: 1,
        descripcion: "Outra tarefa de exemplo",
        rematada: false,
    },
]

// app.get (..put, ..post) (solicitude(req), resposta(res)) 

app.get("/", (_, resposta)=>{
    resposta.status(200)
    resposta.send('Benvido á  API "consulta de tarefas 1.0" ')
})

app.post("/tarefa/", (peticion, resposta)=>{
    tarefas.push(peticion.body)
    resposta.status(200)
    resposta.send("Ok")
})

app.get("/tarefa/", (_, resposta)=>{
    resposta.status(200)
    resposta.send(JSON.stringify(tarefas))
})

app.listen( 8000,()=>{
    console.log("[Backend] traballando...")
})
