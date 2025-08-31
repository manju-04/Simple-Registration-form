
document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');

    // Validation flags
    let isNameValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;

    // Validate name field
    nameInput.addEventListener('input', function () {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('input-error');
            nameInput.classList.remove('input-success');
            isNameValid = false;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('input-error');
            nameInput.classList.add('input-success');
            isNameValid = true;
        }
        updateSubmitButton();
    });

    // Validate email field
    emailInput.addEventListener('input', function () {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('input-error');
            emailInput.classList.remove('input-success');
            isEmailValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('input-error');
            emailInput.classList.remove('input-success');
            isEmailValid = false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('input-error');
            emailInput.classList.add('input-success');
            isEmailValid = true;
        }
        updateSubmitButton();
    });

    // Validate password field
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;

        if (password.length === 0) {
            passwordError.textContent = 'Password is required';
            passwordInput.classList.add('input-error');
            passwordInput.classList.remove('input-success');
            isPasswordValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordInput.classList.add('input-error');
            passwordInput.classList.remove('input-success');
            isPasswordValid = false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('input-error');
            passwordInput.classList.add('input-success');
            isPasswordValid = true;
        }
        updateSubmitButton();
    });

    // Update submit button state
    function updateSubmitButton() {
        if (isNameValid && isEmailValid && isPasswordValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Show success message
        successMessage.style.display = 'block';

        // Reset form after submission
        setTimeout(function () {
            form.reset();
            successMessage.style.display = 'none';
            submitButton.disabled = true;

            // Remove validation classes
            nameInput.classList.remove('input-error', 'input-success');
            emailInput.classList.remove('input-error', 'input-success');
            passwordInput.classList.remove('input-error', 'input-success');
        }, 3000);
    });
});
