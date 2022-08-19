const logoutYesBtn = document.querySelector("#logoutYes");
const logoutNoBtn = document.querySelector("#logoutNo");

logoutYesBtn.addEventListener("click", async (e) => {
    const response = fetch('/api/login/signout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    window.location.href = "/api/login"
});

logoutNoBtn.addEventListener("click", () => {
    window.location.href = "/"
})