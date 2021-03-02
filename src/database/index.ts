import { Connection, createConnection, getConnectionOptions } from "typeorm";

// createConnection();
export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            database:
                process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite":defaultOptions.database,
        })
    );
};

// Aqui é uma condição, a ? (interrogação) é como se fosse o IF os : (dois pontos) o else
// process.env.NODE === 'teste' ? "" : ""