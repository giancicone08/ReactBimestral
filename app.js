const express = require('express');
const app = express();
const authRoutes = require('./routes/auth'); // Certifique-se de que o caminho está correto

app.use(express.json()); // Para que o servidor aceite JSON no corpo das requisições

// Use o prefixo '/api/auth' para suas rotas de autenticação
app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
