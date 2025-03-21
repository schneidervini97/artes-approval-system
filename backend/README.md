# Backend do Sistema de Aprovação de Artes

API RESTful para o sistema de aprovação de artes desenvolvida com Node.js e Express.

## Tecnologias Utilizadas

- Node.js 16+
- Express
- SQLite (desenvolvimento) / PostgreSQL (produção)
- JWT para autenticação
- Joi para validação de dados
- Swagger/OpenAPI para documentação
- Cloudinary para armazenamento de imagens/vídeos
- n8n para automação de fluxos de trabalho

## Estrutura de Diretórios

```
backend/
  ├── src/                # Código fonte
  │   ├── config/         # Configurações do sistema
  │   ├── controllers/    # Controladores para rotas
  │   ├── db/             # Migrações e seeds
  │   ├── middlewares/    # Middlewares Express
  │   ├── models/         # Modelos de dados
  │   ├── routes/         # Definições de rotas
  │   ├── services/       # Serviços de negócio
  │   ├── utils/          # Funções utilitárias
  │   └── app.js          # Configuração do Express
  ├── tests/              # Testes automatizados
  ├── .env.example        # Exemplo de variáveis de ambiente
  ├── package.json        # Dependências
  └── README.md           # Esta documentação
```

## Inicialização para Desenvolvimento

1. Instale as dependências:
```
npm install
```

2. Configure o arquivo `.env` baseado no `.env.example`

3. Execute as migrações do banco de dados:
```
npm run migrate
```

4. Inicie o servidor de desenvolvimento:
```
npm run dev
```

5. Acesse a API em http://localhost:8000
6. Acesse a documentação da API em http://localhost:8000/api-docs 