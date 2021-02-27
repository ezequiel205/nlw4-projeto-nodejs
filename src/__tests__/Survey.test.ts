// import { Connection } from 'typeorm';
// import { createConnection } from 'typeorm';
// import { Connection } from 'typeorm';
import request from "supertest";
import { app } from "../app";

import createConnection from '../database'

describe("Surveys", () => {
    beforeAll(async () => {
        const Connection = await createConnection();
        await Connection.runMigrations();
    });

    it("Deve ser capaz de criar uma nova pesquisa", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Titlo Exemplo",
            description: "Descrição de Exemplo",
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("Deve ser capaz de obter todas as pesquisas", async () => {
        await request(app).post("/surveys").send({
            title: "Titlo Exemplo 2",
            description: "Descrição de Exemplo 2",
        });

        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2);
    });
});