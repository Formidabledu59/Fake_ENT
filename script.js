function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Stocker les informations dans le localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Rediriger vers la page B
    window.location.href = 'connexion.html';
}
