const btnEl = document.querySelector("#signUpBtn");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");

btnEl.addEventListener('click', () => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email.trim().length === 0) { 
        alert("Please enter a valid email address")
    }
    if (password.length < 6) {
        alert("Please enter a valid password. Password must be longer than 6 characters")
    }
})