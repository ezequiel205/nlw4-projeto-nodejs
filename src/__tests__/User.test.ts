// import { Connection } from 'typeorm';
// import { createConnection } from 'typeorm';
// import { Connection } from 'typeorm';
import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";

import createConnection from '../database'

describe("Users", () => {
    beforeAll(async () => {
        const Connection = await createConnection();
        await Connection.runMigrations();
    });

    afterAll (async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Deve ser capaz de criar um novo usuário", async () => {
        const response = await request(app).post("/users").send({
            email: "user@teste.com",
            name: "User Zizi do exemplo",
        });

        expect(response.status).toBe(201);
    });
    
    it("Não deve ser capaz de criar um usuário com e-mail existente", async () => {
         const response = await request(app).post("/users").send({
            email: "user@teste.com",
            name: "User Zizi do exemplo",
        });

        expect(response.status).toBe(400);
    } )
});