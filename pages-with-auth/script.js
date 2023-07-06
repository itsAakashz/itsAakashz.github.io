document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation (replace with server-side validation)
  if (username === 'admin' && password === 'password') {
    // Redirect to the main page or perform other actions
    window.location.href = 'main.html';
  } else {
    document.getElementById('error-message').textContent = 'Invalid username or password.';
  }
});
