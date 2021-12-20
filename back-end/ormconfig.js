require('dotenv').config();

module.exports = {
    type: 'postgres',
    host: process.env.BD_HOST,
    port: +process.env.BD_PORT || 5432,
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/models/*.ts"],
    synchronize: false,
    cli: {
        migrationsDir: "./src/database/migrations"
    }
}