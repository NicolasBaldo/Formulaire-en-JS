document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const cgu = document.getElementById('cgu').checked;

        const firstNameError = document.getElementById('firstNameError');
        const lastNameError = document.getElementById('lastNameError');
        const ageError = document.getElementById('ageError');
        const emailError = document.getElementById('emailError');
        const confirmEmailError = document.getElementById('confirmEmailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        const cguError = document.getElementById('cguError');

        firstNameError.textContent = '';
        lastNameError.textContent = '';
        ageError.textContent = '';
        emailError.textContent = '';
        confirmEmailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        cguError.textContent = '';

        if (firstName.length < 3) {
            isValid = false;
            firstNameError.textContent = 'Le prénom doit faire au moins 3 lettres';
        }

        if (email !== confirmEmail) {
            isValid = false;
            emailError.textContent = 'Les emails ne correspondent pas';
            confirmEmailError.textContent = 'Les emails ne correspondent pas';
        }

        if (password !== confirmPassword) {
            isValid = false;
            passwordError.textContent = 'Les mots de passe ne correspondent pas';
            confirmPasswordError.textContent = 'Les mots de passe ne correspondent pas';
        }

        if (age < 19) {
            isValid = false;
            ageError.textContent = 'L\'âge doit être supérieur à 18';
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            emailError.textContent = 'Format d\'email invalide';
        }

        if (!cgu) {
            isValid = false;
            cguError.textContent = 'Veuillez accepter les CGU';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = input.nextElementSibling;
            if (errorElement.classList.contains('error')) {
                errorElement.textContent = '';
            }
        });
    });
});
