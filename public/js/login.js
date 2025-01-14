const loginFormHandler = async (event) => {
  event.preventDefault();

 // TODO: select the appropriate IDs for username & password
  const usernameEl = document.querySelector('#username-input-login').value.trim();
  const passwordEl = document.querySelector('#password-input-login').value.trim();

  if (usernameEl && passwordEl) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ 
        username: usernameEl,
        password: passwordEl,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert("No profile found with this Username.");
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);


