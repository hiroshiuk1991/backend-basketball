import { Knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database_name",
  },
};

export default config;
