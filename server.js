const express = require('express');
const rotas = require('./rotas');

const app = express();

// Middleware para interpretar requisições JSON
app.use(express.json());

// Rota inicial da aplicação
app.get('/', (req, res) => {
  res.json({
    mensagem: "Minha API está funcionando!"
  });
});

// Rotas de usuários
app.use('/', rotas);

// Inicialização do servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});