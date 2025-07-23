const passwordBox = document.getElementById("pswd");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const spCharacter = "!@#$%&*?"
const mixed = (upperCase + lowerCase + spCharacter + number);

function createPassword(){
    let password = '';
    password+= upperCase[Math.floor(Math.random() * upperCase.length)];
    password+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password+= number[Math.floor(Math.random() * number.length)];
    password+= spCharacter[Math.floor(Math.random() * spCharacter.length)];

    while(length> password.length){
        password += mixed[Math.floor(Math.random()* mixed.length)];
    }

    passwordBox.value = password;
    
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}



