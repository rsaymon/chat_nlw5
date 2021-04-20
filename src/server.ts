import express, { request, response } from 'express';
const app = express();

app.listen(3333, () => console.log("Server ON - port: 3333"));

app.get("/", (request, response) => {
    return response.json({message: "Opa"});
})

app.post("/", (request, response) => {

    return response.json({message: "Usuário salvo!"});
})