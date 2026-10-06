const express = require('express'); // Importation de la bibliothèque Express
const app = express(); // Création de l'application
const PORT = process.env.PORT || 3000; // Définition du port d'écoute

// Middleware pour analyser le JSON envoyé dans les requêtes
app.use(express.json());

// Route principale (Page d'accueil)
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Node.js !');
});

// Exemple de route API qui renvoie du JSON
app.get('/api/statut', (req, res) => {
    res.json({ 
        statut: "en ligne", 
        message: "Le serveur fonctionne parfaitement" 
    });
});

// Démarrage du serveur et écoute des requêtes
app.listen(PORT, () => {
    console.log(`Serveur démarré sur : http://localhost:${PORT}`);
});
