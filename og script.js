// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbers = ['0','1','2','3','4','5','6','7','8','9'];

var specialCharacters = ['U+0020','U+0021','U+0022','u+0023','u+0024','u+0025','u+0026','u+0027','u+0028','u+0029','u+002A','u+002B','u+002C','u+002D','u+002E','u+002F','u+003A','u+003B','u+003C','u+003D','u+003E','u+003F','u+0040','u+005B','u+005C','u+005D','u+005E','u+005F','u+0060','u+007B','U=007C','U=007D','U=007E'];

var password =[];



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passlength = prompt("Length must be 8 to 128 characters. ");
  var lowercase = confirm("Do you want to include lowercase letters in your pasword? ");
  var upperCase = confirm("Do you want to include uppercase letters in your password? ");
  var specialCharacters =confirm("Do you want to include special characters in your password? "); 
  var numbers = confirm("Do you want to include numbers in your password? ");

  if (passlength < 8 || passlength >128) return
for(var i = 0; i >=parseInt(passlength); i++) {
  console.log("hi")
  if (lowerCase) {
    console.log("hi")
    var random = lowerCase[Math.floor(Math.random()*lowerCase.length)];
    console.log(random)
    }
}

if (lowerCase === true) {
    alert("Password will contain lowercase letters.");
  } else {alert("Password will not contain lowercase letters.");
  }
    
  if (UpperCase === true) {
    alert("Password will contain uppercase letters.");
  } else {alert("Password will not contain uppercase letters.");
  }
  
  if (specialCharacters === true) {
  alert("Password will contain special characters.");
  } else {alert("Password will not containspecial characters");
  }
    
  if (numbers === true) {
    alert("Password contain numbers.");
  } else {alert("password will not contain numbers.");
  }


if (lowerCase) {console.log(lowercase)}
if (upperCase) {console.log(upperCase)}
if (specialCharacters) {console.log(specialCharacters)}
if (numbers) {console.log(numbers)}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


//confirms return a true or false