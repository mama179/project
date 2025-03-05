// auth.js

// Simulate user database using local storage
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        document.getElementById('register-error').textContent = 'User already exists!';
    } else {
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        window.location.href = 'index.html';
    }
});

document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'app.html';
    } else {
        document.getElementById('login-error').textContent = 'Invalid email or password!';
    }
});

// Logout
document.getElementById('logout')?.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
});