const logoutYesBtn = document.querySelector("#logoutYes");
const logoutNoBtn = document.querySelector("#logoutNo");

logoutYesBtn.addEventListener("click", async (e) => {
    console.log('hitt')
    const response = fetch('/api/login/signout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    window.location.href = "/api/login"
});