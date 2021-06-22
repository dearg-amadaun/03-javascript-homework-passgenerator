// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbersArray = ['0','1','2','3','4','5','6','7','8','9'];

var specialCharactersArray = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

var password =[];



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passlength = prompt("Length must be 8 to 128 characters. ");
  var lowerCase = confirm("Do you want to include lowercase letters in your pasword? ");
  var upperCase = confirm("Do you want to include uppercase letters in your password? ");
  var specialCharacters =confirm("Do you want to include special characters in your password? "); 
  var numbers = confirm("Do you want to include numbers in your password? ");

  if (passlength < 7 || passlength >129) return
for(var i = 0; i <=parseInt(passlength); i++) {
  
  if (lowerCase === true) {
    var randomLowerCase = lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)];
    console.log(randomLowerCase)
    password.push(randomLowerCase);
  } 
    
  if (upperCase === true) {
    var randomUpperCase = upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)];
    console.log(randomUpperCase)
    password.push(randomUpperCase);
  } 
  
  if (specialCharacters === true) {
    var randomSpecialCharacters = specialCharactersArray[Math.floor(Math.random()*specialCharactersArray.length)];
    console.log(randomSpecialCharacters)
    password.push(randomSpecialCharacters);
    } 

    
  if (numbers === true) {
    var randomNumbers = numbersArray[Math.floor(Math.random()*numbersArray.length)];
    console.log(randomNumbers)
    password.push(randomNumbers);
  }
  console.log(password) 
}

password = password.slice(0, parseInt(passlength));
console.log(password)

password = password.join('');
console.log(password)

return password

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