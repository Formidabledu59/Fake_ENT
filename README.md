# Introduction au HTML, CSS et JavaScript

## HTML (HyperText Markup Language)

HTML est le langage de balisage utilisé pour créer des pages Web. Voici les éléments de base :

- **Balises** : Ce sont des éléments qui décrivent le contenu de la page. Par exemple, `<h1>` pour un titre de niveau 1, `<p>` pour un paragraphe.
  
  ```html
  <h1>Ceci est un titre</h1>
  <p>Ceci est un paragraphe.</p>
  ```

- **Attributs** : Les balises peuvent avoir des attributs qui fournissent des informations supplémentaires. Par exemple, `<a href="https://example.com">Ceci est un lien</a>`.

## CSS (Cascading Style Sheets)

CSS est utilisé pour styliser les pages HTML. Voici comment cela fonctionne :

- **Sélecteurs** : Ils permettent de cibler les éléments HTML à styliser. Par exemple, `h1` cible tous les titres de niveau 1.
  
  ```css
  h1 {
      color: blue;
      font-size: 24px;
  }
  ```

- **Propriétés** : Ce sont les aspects que vous souhaitez modifier (comme `color`, `font-size`, `margin`, etc.).

## JavaScript

JavaScript est un langage de programmation qui permet d’ajouter de l'interactivité aux pages Web. Voici quelques concepts de base :

- **Variables** : Pour stocker des données. Par exemple, `let nom = "Ayoub";`.

- **Fonctions** : Un ensemble d'instructions qui exécutent une tâche. Par exemple :
  
  ```javascript
  function direBonjour() {
      alert("Bonjour !");
  }
  ```

- **Événements** : Vous pouvez exécuter du code JavaScript en réponse à des actions de l'utilisateur, comme un clic.

## Enregistrer une page Web

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

## Tests de redirection et soumission de formulaires

### Redirection

La redirection permet de renvoyer les utilisateurs d'une page à une autre. Cela peut être fait avec JavaScript :

```javascript
window.location.href = "https://nouvellepage.com";
```

### Soumission de formulaires

Les formulaires permettent aux utilisateurs d'envoyer des données. Un formulaire de base ressemble à ceci :

```html
<form action="https://votresite.com/submit" method="POST">
    <input type="text" name="nom" placeholder="Votre nom" required>
    <input type="submit" value="Envoyer">
</form>
```

- **action** : URL où les données du formulaire sont envoyées.
- **method** : Méthode d'envoi des données, généralement `GET` ou `POST`.

Pour tester si le formulaire fonctionne, vous pouvez remplir les champs et cliquer sur le bouton "Envoyer". Vérifiez si vous êtes redirigé vers la bonne page ou si une réponse s'affiche.
