const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;



/**
 * Métodos HTTP;
 * 
 * GET: Buscar uma informação do back-end
 * POST: Sempre que quiser criar uma informação no back-end
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar resursos
  * Request Body: Corpo da Requisição, utilizado para criar/alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle,...
   * NoSQL: MongoDB, CouchDB
   */

