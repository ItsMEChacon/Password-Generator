// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt("Please select a password length between 8 and 128 characters")); {
   if(pwlength < 8) {
    prompt ("Select a larger number");
  }
   else if (pwlength > 128) {
      prompt("Select a smaller number");
    }
   else if (isNan(pwlength) === true){
      prompt("That's not a number silly. Please refresh the page")
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

var smallL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var bigL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];
