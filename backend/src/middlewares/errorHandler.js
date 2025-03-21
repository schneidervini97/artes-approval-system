// Middleware para tratar erros globalmente
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Erros de validação (Joi)
  if (err.isJoi) {
    return res.status(400).json({
      error: {
        message: 'Erro de validação',
        details: err.details.map(detail => detail.message)
      }
    });
  }

  // Erros personalizados da aplicação
  if (err.name === 'AppError') {
    return res.status(err.statusCode || 400).json({
      error: {
        message: err.message
      }
    });
  }

  // Erros de JWT
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: {
        message: 'Token inválido'
      }
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: {
        message: 'Token expirado'
      }
    });
  }

  // Erro interno do servidor (fallback)
  res.status(500).json({
    error: {
      message: 'Erro interno do servidor',
      ...(process.env.NODE_ENV === 'development' && { details: err.message })
    }
  });
};

module.exports = { errorHandler }; 