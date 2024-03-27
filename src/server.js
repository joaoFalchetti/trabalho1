const express = require('express');
const app = express();

// Rota principal
app.get('/', (req, res) => {
  res.send('Página inicial - Breve introdução');
});

// Rota sobre
app.get('/about', (req, res) => {
  res.send('Página sobre - Formação, experiência e habilidades');
});

// Rota portfolio
app.get('/portfolio', (req, res) => {
  res.send('Página de portfólio - Trabalhos anteriores');
});

// Rota currículo
app.get('/curriculum', (req, res) => {
  res.send('Página de currículo - Versão digital para download');
});

// Rota contato
app.get('/contact', (req, res) => {
  res.send('Página de contato - Informações de contato e redes sociais');
});

// Rota padrão para 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});