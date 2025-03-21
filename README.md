# Sistema de Aprovação de Artes

Sistema para gerenciamento e aprovação de artes por clientes.

## Visão Geral

Esta aplicação permite:
- Gerenciamento de usuários e clientes
- Upload e armazenamento de artes (imagens/vídeos)
- Fluxo de aprovação/reprovação de artes pelos clientes
- Notificações automatizadas

## Estrutura do Projeto

- `/backend` - API RESTful com Node.js e Express
- `/frontend` - Aplicação React com Tailwind CSS

## Requisitos

- Node.js 16+
- Docker e Docker Compose
- Git

## Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:
```
git clone https://github.com/schneidervini97/artes-approval-system.git
cd artes-approval-system
```

2. Inicie os contêineres Docker:
```
docker-compose up -d
```

3. Acesse:
   - Frontend: http://localhost:3000
   - API: http://localhost:8000
   - Documentação da API: http://localhost:8000/api-docs

## Status da Implementação

Este projeto está em desenvolvimento como MVP, seguindo o [plano de implementação](./passos-implementacao-mvp.md). 