const fs = require('fs');

// Contenu à écrire dans le fichier
const content = 'Hello Node';

// Créez le fichier "welcome.txt" et écrivez le contenu
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Erreur lors de la création du fichier :', err);
  } else {
    console.log('Fichier "welcome.txt" créé avec succès.');
  }
});
