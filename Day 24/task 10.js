const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

const fakeUser = {
    username: 'admin',
    password: 'Password123'
};
    function validateInput(username, password) {
    let errors = {};

    if (!username) {
        errors.username = 'Username cannot be empty.';
    } else if (username.length < 3) {
        errors.username = 'Username must be at least 3 characters.';
    }

    if (!password) {
        errors.password = 'Password cannot be empty.';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters.';
    }

    return errors;
}

    loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    usernameError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    try {
        const errors = validateInput(username, password);
        if (Object.keys(errors).length > 0) {
            if (errors.username) usernameError.textContent = errors.username;
            if (errors.password) passwordError.textContent = errors.password;
            throw new Error('Validation failed');
        }

        if (username !== fakeUser.username || password !== fakeUser.password) {
            throw new Error('Invalid username or password');
        }

        formMessage.textContent = 'Login successful!';
        formMessage.className = 'success';
        console.log('User logged in:', username);

    } catch (err) {
        formMessage.textContent = err.message;
        formMessage.className = 'error';
        console.warn('Login error:', err.message);
    }
});
