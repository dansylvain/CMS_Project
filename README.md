# ✍️ ArticleForge – Éditeur markdown intelligent

## 🎯 Objectif
Créer une application React moderne permettant de rédiger, illustrer, prévisualiser et publier des articles au format Markdown de manière simple et intuitive.

## 🧱 Fonctionnalités (MVP)
- Éditeur markdown interactif (ex: react-markdown-editor-lite)
- Ajout d’illustrations (.webp, .gif, .webm, etc.)
- Aperçu en temps réel de l’article final
- Export de l’article en `.md`
- Upload automatique vers un dépôt GitHub (via GitHub API)
  - Dans le dossier `/articles/` ou `/projects/` selon le type d’article
- Stockage des fichiers illustratifs dans un sous-dossier GitHub

## 🧭 Fonctionnalités futures (non-MVP)
- Publication automatique sur Medium
- Génération de post LinkedIn basé sur l’article
- Authentification (éventuellement via GitHub ou Google)
- Interface multilingue

## 🛠️ Contraintes techniques
- **Framework principal** : React
- **Librairies recommandées** :
  - `react-markdown-editor-lite` ou équivalent moderne
  - `react-dropzone` ou `react-uploady` pour le drag & drop d’images/vidéos
  - Utilisation de `fetch` ou `axios` pour les appels à l’API GitHub
- Utilisation de l’API REST de GitHub (pas GraphQL)
- Les fichiers binaires doivent être encodés en base64 avant envoi
- Structure claire et modulaire du code

## 📁 Arborescence cible (à titre indicatif)
ArticleForge/
├── public/
├── src/
│ ├── components/
│ │ ├── Editor.jsx
│ │ ├── Preview.jsx
│ │ ├── FileUploader.jsx
│ ├── services/
│ │ └── githubApi.js
│ ├── App.jsx
│ └── index.jsx
├── README.md
└── package.json

pgsql
Copier
Modifier

## 🧠 Philosophie de développement
- Travail itératif avec l’aide d’un LLM pour générer le code
- Priorité à la lisibilité, la modularité, et la scalabilité
- Publication progressive des fonctionnalités
