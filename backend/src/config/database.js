const knex = require('knex');
const config = require('../../knexfile');

// Seleciona o ambiente baseado na variável de ambiente NODE_ENV
const environment = process.env.NODE_ENV || 'development';
const connectionConfig = config[environment];

// Inicializa a conexão
const connection = knex(connectionConfig);

module.exports = connection; 