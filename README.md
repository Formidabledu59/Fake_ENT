
# Projet Fake ENT

Ce projet vise à créer un environnement web simulé pour des démonstrations éducatives, notamment dans le cadre de l'apprentissage des technologies web et de la sécurité des formulaires en ligne. Le projet consiste en une copie modifiée d’un site existant, avec des ajustements pour permettre des tests et exercices pédagogiques.

## Objectifs du Projet

- Illustrer le fonctionnement d'un site web avec une page de connexion et des scripts JavaScript associés.
- Fournir un environnement de test pour explorer les aspects de sécurité et de manipulation des formulaires.
- Offrir aux élèves un espace de tests et d’ateliers pratiques.

## Étapes de Création

### 1. Création du Répertoire Git

1. Création d’un dépôt distant vide (sur github)
2. Clonage du dépôt vide en local (dans un terminal)
```git clone lien_du_repo```
3. Synchronisation initiale avec `pull`

### 2. Enregistrer d'une la Page Web

Pour reproduire une page Web d'un site Internet, vous pouvez faire un clic droit sur la page et sélectionner **"Enregistrer sous"**. Cela vous permet de télécharger la page HTML et tous les fichiers associés (images, CSS, JavaScript). Une fois enregistrée, vous pouvez :

1. **Ouvrir le fichier HTML** dans un éditeur de texte.
2. **Modifier les liens** (`href`) dans les balises `<a>` pour qu'ils pointent vers les destinations que vous souhaitez.

Par exemple, changez ceci :

```html
<a href="https://example.com">Visitez notre site</a>
```

en ceci :

```html
<a href="https://votresite.com">Visitez votre site</a>
```

### 3. Modifications pour le Fake ENT

#### Modifications Principales

__Pour voir les modifications ```Ctrl``` + ```F``` dans le ficher__

- **Fichier `index.html`** : Transformé en page d’accueil pour l’environnement d’apprentissage.
- **Fichier JavaScript (`Connexion élève - ÉduConnect_files/lib.v2.js`)** : Modifié à la ligne 166 pour adapter les fonctionnalités.
- **Page `Connexion élève - ÉduConnect.html`** : 
  - Ajout d'un script personnalisé en ligne 21
  - Modification du formulaire de connexion pour appeler une fonction JavaScript personnalisée
- **Création de fichiers supplémentaires** : Ajout de fichiers JavaScript et d'une page de connexion interactive.
---

**Lien vers les tests** : [Cliquez ici pour les tests](https://github.com/Formidabledu59/Fake_ENT/tree/main/test)

---
