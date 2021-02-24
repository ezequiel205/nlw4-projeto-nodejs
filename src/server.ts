import 'reflect-metadata'
import express from 'express';
import "./database";
import { addListener } from 'process';



const app = express();


/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELTE => Deletar
 * PATCH => Alteração especifica
 * 
 */

 // http://localhost:3333/users
 // app.get("/users", (request, response) => {
    app.get("/", (request, response) => {
        //return response.send("Hello World - NLW04")
    return response.json({message: "Hello Word - NLW04"})
});

// 1 param => Rota (Recurso API)
// 2 param => request, response
app.post("/", (request, response) => {

    // Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"})
})


app.listen(3333, () => console.log("Server is running!")); // Porta: 3333

