const express = require('express');
const router = express.Router();

// Futuros routers serão adicionados aqui
// router.use('/users', require('./userRoutes'));
// router.use('/clients', require('./clientRoutes'));
// router.use('/arts', require('./artRoutes'));

// Rota de teste para verificar se a API v1 está funcionando
router.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API v1 do Sistema de Aprovação de Artes' });
});

module.exports = router; 