function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.querySelector('input[name="userType"]:checked').value;

    if (userType === 'admin' && username === 'admin' && password === 'admin') {
        window.location.href = 'admin.html';
    } else if (userType === 'employee' && username === 'employee' && password === 'employee') {
        window.location.href = 'employee.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}