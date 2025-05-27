document.getElementById('emailForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback');

    if (!name || !email || !message) {
        e.preventDefault();
        feedback.textContent = 'Veuillez remplir tous les champs.';
        feedback.className = 'message error';
        return;
    }

    if (!validateEmail(email)) {
        e.preventDefault();
        feedback.textContent = 'Adresse e-mail invalide.';
        feedback.className = 'message error';
        return;
    }

    feedback.textContent = 'Envoi en cours...';
    feedback.className = 'message';
});

function validateEmail(email) {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email.toLowerCase());
}