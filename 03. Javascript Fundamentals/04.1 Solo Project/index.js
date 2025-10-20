// write a code that will generate two random passwords and display them in the password fields once the "Generate Passwords" button is clicked. First create the characheter array that the passwords will be generated from. The character set should include uppercase letters, lowercase letters, numbers, and special characters. The passwords should be 15 characters long.

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
const passwordLength = 15;

function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

document.getElementById("generate").addEventListener("click", function() {
    const password1 = generatePassword();
    const password2 = generatePassword();
    document.getElementById("password1").value = password1;
    document.getElementById("password2").value = password2;
});