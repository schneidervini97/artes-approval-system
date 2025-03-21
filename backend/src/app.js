const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('express-async-errors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { errorHandler } = require('./middlewares/errorHandler');
const apiV1Router = require('./routes/v1');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Swagger Configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Sistema de Aprovação de Artes',
      version: '1.0.0',
      description: 'API para sistema de gerenciamento e aprovação de artes por clientes',
      contact: {
        name: 'Suporte',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8000}`,
        description: 'Servidor de Desenvolvimento',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/v1/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use('/api/v1', apiV1Router);

// Rota para verificar se a API está funcionando
app.get('/', (req, res) => {
  res.json({ 
    message: 'API do Sistema de Aprovação de Artes funcionando!',
    version: '1.0.0',
    status: 'online'
  });
});

// Middleware de tratamento de erros
app.use(errorHandler);

module.exports = app; 