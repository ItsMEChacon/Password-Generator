// Assignment Code
var password = document.querySelector('#generate');
var smallL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var bigL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];


function generatePassword() {
    password.innerHTML = "";
    var pwlength = (prompt("Please select a password length between 8 and 128 characters")); {
    if(pwlength < 8) {
    prompt ("Select a larger number");
    }
    else if (pwlength > 128) {
      prompt("Select a smaller number");
    }
  
    var character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var caps = confirm("Would you like capital letters in your password?");{
        if(caps === true){character.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"); 
        alert("Capital letters will be in included");}
        else alert("Capital letters will be excluded");
            }

    var numbs = confirm("Would you like numbers in your password?");{
        if(numbs === true){character.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        alert("Numbers will be included");}
        else alert("Numbers will be excluded");            }

        var specials = confirm("Would you like special characters in your password?");{
        if(specials === true){character.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+");
        alert("Special characters will be included")}
        else alert("Special characters will be excluded")
             }

        for(var i = 0; i < length; i++){
        
        var inputs = character[Math.floor(Math.random() * character.length)]
        document.getElementById("#password").innerHTML += inputs
       
        console.log(inputs)
    }
 }
} 


password.addEventListener('click', generatePassword);

