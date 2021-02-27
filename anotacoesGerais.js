// Comandos utilizados:
// Dependencias, etc...
// // Incializar 
// yarn init -y
// // Adicionar dependencias...
// yarn add express 
// yarn add @types/express -D
// yarn add typescript -D
// yarn tsc --init
// yarn add ts-node-dev -D
// em package.json > adicionar
//   "scripts": {
//     "dev": "ts-node-dev src/server.ts"
//   }
// // start server
// yarn dev
//node_modules / Repository
// ORM's citados: https://node-postgres.com/features/connecting - http://knexjs.org - https://typeorm.io/#/

/* 
Testes Automatizados

1 - Testes unitários (Geralmente utiliza no TDD - Desenvolvimento orientado a testes )
    Testes feitos localmente e ir criando as "pastas" conforme houver necessidade
2 - Testes de Integração (Testa a funcionalidade completa da nossa aplicação)
    Ex: Teste para criação de usuários: Primeiro testo as;
-> request    -> routes -> controller -> repositório
-> response -> repository -> controler
3 - Ponta a Ponta (E2E) - Testar toda ação do usuário na aplicação (Possíveis erros do usuário) - Geralmente é para frontend

Passo a passo para criar a API
1- Criar a migration
2 - Criar o models
3 - Criar os repositórios
4 - Criar o controllers
*/

/* First.test.ts - Conceitos

describe("First", () => {

    it("deve ser possível somar 2 números", () => {

        expect(2 + 2).toBe(4);
    });

    it("deve ser possível somar 2 números", () => {

        expect(2 + 2).not.toBe(5);
    });
});
*/