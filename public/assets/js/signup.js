const btnEl = document.querySelector("#signUpBtn");
const emailInput = document.querySelector("#emailInput");
const usernameInput = document.querySelector("#usernameInput")
const passwordInput = document.querySelector("#passwordInput");

btnEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (email.trim().length === 0) { 
        alert("Please enter a valid email address")
    }
    if (username.trim().length === 0) { 
        alert("Please enter a valid username")
    }
    if (password.length < 6) {
        alert("Please enter a valid password. Password must be longer than 6 characters")
    }

    const response = await fetch('/api/login/signup',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            username,
            password,
        })
    });
    // window.location.href = '/';
})