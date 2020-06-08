// Assignment code here

function generatePassword() {
    var pwLength = countCharacter();
    var passCharacter = checkUser();
    console.log(pwLength);
  
    let pw = ""
    for (let i = 0; i < pwLength; i++) {
      var randomIndex = Math.floor((Math.random() * passCharacter.length) + 0);
      pw += passCharacter[randomIndex];
    }
    console.log("pw: ", pw)
    return pw;
  
  }
  // Write password to the #password input
  function countCharacter() {
  
    let charactersCount = 1;
    while (charactersCount < 8 || charactersCount > 128) {
      charactersCount = parseInt(window.prompt("How many characters would you like your password to contain"));
      console.log("please select number between 8 - 128")
    }
    return charactersCount;
  }
  
  function checkUser() {
  
    console.log(specialCharacters);
    var specialCharacters = false
    //user ing numbers
    var numberUseage = false
    // use lower letters
    var lowerLetters = false
    // yser upper case
    var upperLetters = false
    while (!(specialCharacters || numberUseage || lowerLetters || upperLetters)) {
      specialCharacters = window.confirm("Click OK to confirm including special characters");
      numberUseage = window.confirm("Click OK to confirm including numeric characters");
      lowerLetters = window.confirm("Click OK to confirm including lowercase characters");
      upperLetters = window.confirm("Click OK to confirm including uppercase characters");
    }
  
    let SPC = ['!', '#', '&', '$', ',', '+', '(', ')', '/', '<', '>', '@', '=', '?', '}', '{', '^']
    let LWC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let UPC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let NUM = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  
    let empty = []
    if (specialCharacters) {
      empty.push(...SPC)
    }
    if (numberUseage) {
      empty.push(...NUM)
    }
    if (lowerLetters) {
      empty.push(...LWC)
    }
    if (upperLetters) {
      empty.push(...UPC)
    }
    return empty
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", function (e) {
    console.log("Generate password clicked")
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  })
  
  