// Assignment Code
function generatePassword() {

  //variables needed for the Math  
  var selectedWord = "";
  var needWord = "";
  var section = 0;

  // gets user input more than 8 less than 128 characters 
  var numwords = prompt("How many words you need for the password?");    
  if (8 <= numwords && numwords <= 126) {

    // asking if yes to the lowercase 
    var lowercase = confirm("Do you want lowecase in your password?")
    if (lowercase == true) {
      var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
      selectedWord = selectedWord + alphabetLower;
      //at least one 
      needWord = needWord + alphabetLower[Math.floor(Math.random() * alphabetLower.length)];
      section = section + 1;
    } else { 
      selectedWord = selectedWord + "";
      needWord = needWord + "";
    }

    // if yes to the Uppercase 
    var uppercase = confirm("Do you want Uppercase in your password?");
    if (uppercase == true) {
      var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      selectedWord = selectedWord + alphabetUpper;
      //at least one 
      needWord = needWord + alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
      section = section + 1;
    } else { 
      selectedWord = selectedWord + "";
      needWord = needWord + "";
    }

    // if yes to the numeric
    var numeric = confirm("Do you want Numbers in your password?");
    if (numeric == true) {
      var number = "0123456789";
      selectedWord = selectedWord + number;
      //at least one 
      needWord = needWord + number[Math.floor(Math.random() * number.length)];
      section = section + 1;
    } else { 
      selectedWord = selectedWord + "";
      needWord = needWord + "";
    }

    // if yes to the special characters
    var special = confirm("Do you want special characters in your password?");
    if (special == true) {
      var characters="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      selectedWord = selectedWord + characters;
      //at least one 
      needWord = needWord + characters[Math.floor(Math.random() * characters.length)];
      section = section + 1;
    } else { 
      selectedWord = selectedWord + "";
      needWord = needWord + "";
    }

    // if the answer is valid with at least one character letter 
    if (selectedWord.length == 0) {  
      password = "You need to choose at least one element.";
    } else {
      //choosing the number from the selectedWord (list)
      for (var i = 1; i <= (numwords-section); i++) {
        needWord = needWord + selectedWord[Math.floor(Math.random() * selectedWord.length)];
      }
      //randomize the number
      password = needWord.split("").sort(function(){return 0.5-Math.random()}).join("");
    }
  } else {
    //if the numer is not between 9 - 128
    password = "Please choose the number between 8 to 128.";
  }
  return password;
}

//coded one
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
