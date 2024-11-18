// testMongoConnection.js
require('dotenv').config(); // Carregar variáveis do arquivo .env
const mongoose = require('mongoose');

// Verificar se a variável de ambiente MONGO_URI está definida
if (!process.env.MONGO_URI) {
  console.error("Erro: MONGO_URI não está definida no arquivo .env");
  process.exit(1);
}

// Função para testar a conexão com o MongoDB
async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Conexão bem-sucedida com o MongoDB');
    process.exit(0); // Fechar o processo após a conexão bem-sucedida
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // Fechar o processo com erro
  }
}

connectToMongo();
