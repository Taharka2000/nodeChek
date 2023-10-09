console.log("HELLO WORLD")
// Importez le module HTTP
const http = require('http');

// Configuration du port sur lequel le serveur écoutera
const port = 3000;

// Créez le serveur HTTP
const server = http.createServer((req, res) => {
  // Définissez l'en-tête de réponse avec le type de contenu HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Envoyez la réponse avec le contenu HTML
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Écoutez le serveur sur le port spécifié
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});