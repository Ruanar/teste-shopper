import { connection } from "./data/connection";

connection
    .raw(`
        CREATE TABLE IF NOT EXISTS shopper_products(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            qty_stock INT NOT NULL
        );
    `)