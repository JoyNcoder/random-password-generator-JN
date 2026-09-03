const Length = document.getElementById("passLength");
const isLowerCase = document.getElementById("lowerCase");
const isUpperCase = document.getElementById("upperCase");
const isNumbers = document.getElementById("Numbers");
const isSpecial = document.getElementById("spChar");
const Make = document.getElementById("Generate");
const show = document.getElementById("Result");
const showPassword = document.getElementById("password");

function makePassword(){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const spChars = "!@#$%^&*()-_=+[]{}|:<>/?~";

    let bigString = "", password = "";

    bigString += isLowerCase.checked? lowerChars : "";
    bigString += isUpperCase.checked? upperChars : "";
    bigString += isNumbers.checked? numbers : "";
    bigString += isSpecial.checked? spChars : "";

    if(Length.value <=5 || Length.value>50){
        show.style.color='red';
        show.textContent="Length is invalid. Choose 6-50";
    }else{
        if(bigString === ""){
            show.style.color='red';
            show.innerHTML = "Choose at least one checkbox";
        }else{
            show.textContent = "";
            for(let i=0; i<Number(Length.value); i++){
                const random = Math.floor(Math.random() * bigString.length);
                password += bigString[random];
            }
            
            showPassword.value = password;
            
            showPassword.onclick = function() {
                show.style.color="black"; show.textContent = "copied!";
                navigator.clipboard.writeText(password);
                setTimeout(function() {show.textContent = "";}, 700);
            };
            
        }
    }
};
