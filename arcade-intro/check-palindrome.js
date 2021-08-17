function checkPalindrome(inputString) {
  var stringReversed = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    stringReversed += inputString[i];
  }
  if (inputString !== stringReversed) {
    return false;
  } else {
    return true;
  }
}
