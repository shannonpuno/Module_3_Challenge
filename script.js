// Assignment code here


// Array Options
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "?",];

// Declare Variables
var confirmpasslength = "";
var confirmlowercase;
var confirmuppercase;
var confirmnumber;
var confirmspecialchar;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Ask User Input
  let confirmpasslength = window.prompt("How many characters will your password include?");
  if (confirmpasslength < 8 || confirmpasslength > 128) {
    alert("Password must contain atleast 8 characters and no more than 128 characters.");
  }

  //After user inputs valid password length Confirm Characters
  else {
    confirmlowercase = confirm("Confirm if password will include lowercase characters.");
    confirmuppercase = confirm("Confirm if password will include uppercase characters.");
    confirmnumber = confirm("Confirm if password will include numbers.");
    confirmspecialchar = confirm("Confirm if password will include special characters.");
  };
  //Determine options with the User Input of Characters
  var options;

  if (confirmlowercase && confirmuppercase && confirmnumber && confirmspecialchar) {
    options = lowercase.concat(uppercase, number, specialchar);
  }
  else if (confirmlowercase && confirmuppercase && confirmnumber) {
    options = lowercase.concat(uppercase, number);
  }
  else if (confirmlowercase && confirmuppercase) {
    options = lowercase.concat(uppercase);
  }
  else if (confirmlowercase) {
    options = lowercase;
  }
  else if (confirmuppercase && confirmnumber && confirmspecialchar) {
    options = uppercase.concat(number, specialchar);
  }
  else if (confirmuppercase && confirmnumber) {
    options = uppercase.concat(number);
  }
  else if (confirmuppercase) {
    options = uppercase;
  }
  else if (confirmnumber && confirmspecialchar) {
    options = number.concat(specialchar);
  }
  else if (confirmnumber && confirmlowercase && confirmuppercase) {
    options = number.concat(lowercase, uppercase);
  }
  else if (confirmnumber && confirmlowercase) {
    options = number.concat(lowercase);
  }
  else if (confirmnumber) {
    options = number;
  }
  else if (confirmspecialchar && confirmlowercase && confirmnumber) {
    options = specialchar.concat(lowercase, number);
  }
  else if (confirmspecialchar && lowercase) {
    options = specialchar.concat(lowercase);
  }
  else if (confirmspecialchar && uppercase) {
    options = specialchar.concat(uppercase);
  }
  else if (confirmspecialchar) {
    options = specialchar;
  };
  // Use Options to create passsword
  var generatedPassword = ""
  for (let i = 0; i < confirmpasslength; i++) {
    generatedPassword = generatedPassword + options[Math.floor(Math.random() * options.length)];
    console.log(generatedPassword);
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
