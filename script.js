// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Global criteria for password
let uppercaseAllowed = false;
let numbersAllowed = false;
let specialCharactersAllowed = false;
let passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment code here
// Generate a random password based on a criteria provided by the user
function generatePassword() {
  var userInput;
  var validPasswordEntered = false;

  // Possible character sets based on user password criteria
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}',':',';','<','>',',','.','?'];

  var passwordCharacters = []; // Chosen characters for the password


  // Prompt user for password criteria and length
  getPasswordCriteria();

  // All characters allowed for the password will go into this array, lowercase are the only required set
  var allowedCharacters = lowercase;

  // If password should contain uppercase characters, pick at least 1 and add set to allowedCharacters array
  if (uppercaseAllowed) {
    passwordCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    allowedCharacters = allowedCharacters.concat(uppercase);
  }

  // If password should contain numbers, pick at least 1 and add set to allowedCharacters array
  if (numbersAllowed) {
    passwordCharacters.push(numbers[Math.floor(Math.random() * numbers.length)]);
    allowedCharacters = allowedCharacters.concat(numbers);
  }

  // If password should contain special characters, pick at least 1 and add set to allowedCharacters array
  if (specialCharactersAllowed) {
    passwordCharacters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    allowedCharacters = allowedCharacters.concat(specialCharacters);
  }

  // Choose random characters for the password until desired length is reached
  while(passwordCharacters.length < passwordLength) {
    passwordCharacters.push(allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]);
  }

  // Randomly print the chosen characters for the password
  var password = "";
  while(passwordCharacters.length > 0) {
    password += passwordCharacters.splice(Math.floor(Math.random() * passwordCharacters.length), 1);
  }

  // Return generated password string
  return password;
}


// Obtain desired password length from user
function getPasswordCriteria() {
  var validUppercaseInput = false;
  var validNumberInput = false;
  var validSpecialCharacterInput = false;
  var validLengthInput = false;

  // Prompt user if uppercase characters should be in password until they have entered valid input
  while(!validUppercaseInput) {
    var uppercaseInput = window.prompt("Should the password contain uppercase letters (Y or N)?");
    if (uppercaseInput == "Y" || uppercaseInput == "y") {
      uppercaseAllowed = true;
      validUppercaseInput = true;
    }
    else if (uppercaseInput == "N" || uppercaseInput == "n") {
      validUppercaseInput = true;
    }
  }

  // Prompt user if numbers should be in password until they have entered valid input
  while(!validNumberInput) {
    var numberInput = window.prompt("Should the password contain numbers (Y or N)?");
    if (numberInput == "Y" || numberInput == "y") {
      numbersAllowed = true;
      validNumberInput = true;
    }
    else if (numberInput == "N" || numberInput == "n") {
      validNumberInput = true;
    }
  }

  // Prompt user if special characters should be in password until they have entered valid input
  while(!validSpecialCharacterInput) {
    var specialCharacterInput = window.prompt("Should the password contain special characters (Y or N)?");
    if (specialCharacterInput == "Y" || specialCharacterInput == "y") {
      specialCharactersAllowed = true;
      validSpecialCharacterInput = true;
    }
    else if (specialCharacterInput == "N" || specialCharacterInput == "n") {
      validSpecialCharacterInput = true;
    }
  }

  // Prompt user for password length until valid password is entered (between 8 and 128)
  while(!validLengthInput) {
    var lengthInput = window.prompt("Enter the length of your desired password (Must be between 8 and 128):");
    if (lengthInput.toString() >= 8 && lengthInput.toString() <= 128) {
      validLengthInput = true;
      passwordLength = lengthInput;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);