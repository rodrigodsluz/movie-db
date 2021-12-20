import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import createConnection from './database';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

createConnection().then(() => {
    console.log('Conexão com o banco de dados efetuada com sucesso')
    app.listen(3333, () => console.log('Server is running 3333'));
})
.catch(e => console.log('Falha de conexão com o banco de dados -> ',e.message || e))
