const express = require('express'); 
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json()); // Converte para JSON os resultados de uma rota.
app.use(routes);

/* *
 * ROTA / RECURSO 
 */

/* *
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/* *
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?", podem ser anexados com "&" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */

/*
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, DynamoDB ...
 */ 

/*
 * Driver: SELECT * FROM Users
 * Query Builder: table('users').select('*').where()
 */ 

app.listen(3333)