const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()-_=+";

sizePassword.textContent = sliderElement.value;

sliderElement.addEventListener("input", function() {
    sizePassword.textContent = this.value;
});

function generatePassword() {
    let pass = "";

    for (let i = 0; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide");
    password.textContent = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(password.textContent);
}
