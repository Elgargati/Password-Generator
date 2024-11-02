const passwordBox = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const toLowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&()*+,-./:;<=>?@[^_|}~";

const allChars = upperCase + toLowerCase + number + symbol;
console.log(allChars);

function createPassword() {
  var password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += toLowerCase[Math.floor(Math.random() * toLowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  if (passwordBox.value.trim() != "") {
    passwordBox.select();
    document.execCommand("copy");
    setTimeout(() => (passwordBox.value = ""), 3000);
  }
}
