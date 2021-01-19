// Assignment Code
var password = document.querySelector("#generate");
password.addEventListener("click", generatePassword);


function generatePassword(){
    var pwlength = prompt("Please select a password length between 6 and 100 characters"); 
    if(pwlength < 6) {
    prompt ("Select a larger number");
    }
    else if (pwlength > 100) {
      prompt("Select a smaller number");
    }
  
    var base = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var caps = confirm("Would you like capital letters in your password?");{
        if(caps === true){base.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"); 
        alert("Capital letters will be in included");}
        else alert("Capital letters will be excluded");
        console.log(base);
    }

    var numbs = confirm("Would you like numbers in your password?");{
        if(numbs === true){base.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        alert("Numbers will be included");}
        else alert("Numbers will be excluded");   
        console.log(base);         
    }

        var specials = confirm("Would you like special characters in your password?");{
        if(specials === true){base.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+");
        alert("Special characters will be included")}
        else alert("Special characters will be excluded")
        console.log(base);
    }
    
        for (var i = 0; i < pwlength; i++){
        
        var inputs = base[Math.floor(Math.random() * base.length)];
        document.getElementById("password").innerHTML += inputs;
    }
}



