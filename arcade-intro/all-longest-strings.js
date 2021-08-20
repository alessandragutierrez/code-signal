function allLongestStrings(inputArray) {
  let longestLength = 0;
  let longestStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestLength = inputArray[i].length;
      longestStrings = [inputArray[i]];
    } else if (inputArray[i].length === longestLength) {
      longestStrings.push(inputArray[i]);
    }
  }
  return longestStrings;
}
