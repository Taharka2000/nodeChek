// Importez le module generate-password
const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  // Configuration du générateur de mots de passe
  const passwordOptions = {
    length: 12, // Longueur du mot de passe
    numbers: true, // Inclure des chiffres
    symbols: true, // Inclure des caractères spéciaux
    uppercase: true, // Inclure des lettres majuscules
    strict: true, // Assurez-vous qu'il y a au moins un caractère de chaque catégorie
  };

  // Générer le mot de passe
  const password = generatePassword.generate(passwordOptions);

  // Afficher le mot de passe généré
  console.log('Mot de passe généré :', password);
}

// Appeler la fonction pour générer un mot de passe
generateRandomPassword();