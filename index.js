const error = document.getElementById("logError");

function checkTheData() {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    const emailInputValue = document.getElementById("logEmail").value;
    const passInputValue = document.getElementById("logPass").value;

    if (emailInputValue === savedEmail && passInputValue === savedPassword) {
        return true;
    } else {
        return false;
    }
}

document.getElementById("signInSubmit").addEventListener("click", () => {
    if (checkTheData()) {
        error.textContent = "";
        window.location.href = "http://127.0.0.1:5500/main/main.html";
    } else {
        error.textContent = "Şifrə və ya login düzgün yazılmayıb";
    }
});
