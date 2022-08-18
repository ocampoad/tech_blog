const btnEl = document.querySelector("#signInBtn");
const usernameInput = document.querySelector("#usernameInput")
const passwordInput = document.querySelector("#passwordInput");

btnEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    const response = await fetch('/api/login/signin',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        })
    });
    window.location.href = '/';
})