
# Tests de Redirection et Soumission de Formulaires

## Introduction

Ce guide décrit comment tester la redirection de page et la soumission de formulaires, en s'appuyant sur trois exemples de fichiers HTML : `page envoie.html`, `pagea.html`, et `pageb.html`.

## 1. Redirection

La redirection est utilisée pour transférer un utilisateur d'une page à une autre. Dans `pagea.html`, un script JavaScript redirige l'utilisateur vers `pageB.html` après la soumission d'un formulaire.

```javascript
// Rediriger vers une autre page
window.location.href = 'pageB.html';
```

### Exemple dans `pagea.html` :

```html
<button type="button" onclick="submitForm()">Envoyer</button>

<script>
    function submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Stocker les informations dans le localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);

        // Rediriger vers la page B
        window.location.href = 'pageB.html';
    }
</script>
```

## 2. Soumission de Formulaires

Les formulaires permettent aux utilisateurs d'envoyer des données. Voici un exemple tiré de `page envoie.html` :

```html
<form onsubmit="handleSubmit(event)">
    <label for="name">Nom :</label>
    <input type="text" id="name" name="name" required>
    <br><br>

    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required>
    <br><br>

    <label for="message">Message :</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    <br><br>

    <input type="submit" value="Envoyer">
</form>

<script>
    function handleSubmit(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        // Récupérer les valeurs des champs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Afficher les valeurs dans une alerte
        alert(`Nom : ${name}\nEmail : ${email}\nMessage : ${message}`);
    }
</script>
```

## 3. Affichage des Données

Dans `pageb.html`, les données stockées dans le `localStorage` (par `pagea.html`) sont récupérées et affichées :

```html
<script>
    // Récupérer les informations depuis le localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    // Afficher les informations
    document.getElementById('displayName').innerText = 'Nom: ' + name;
    document.getElementById('displayEmail').innerText = 'Email: ' + email;
    document.getElementById('displayMessage').innerText = 'Message: ' + message;
</script>
```

## 4. Tests à Effectuer

- **Redirection** : Vérifiez que le bouton "Envoyer" sur `pagea.html` redirige correctement vers `pageB.html`.
- **Soumission de formulaires** : Remplissez et envoyez le formulaire dans `page envoie.html` pour voir l'affichage des valeurs.
- **Stockage et récupération** : Assurez-vous que les données saisies sur `pagea.html` s'affichent correctement sur `pageB.html` après la redirection.

---

