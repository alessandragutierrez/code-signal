function isLucky(n) {
  let firstSum = 0;
  let secondSum = 0;
  const nString = n.toString();
  const firstHalf = nString.substring(0, nString.length / 2);
  const secondHalf = nString.substring(nString.length / 2);
  for (let i = 0; i < firstHalf.length; i++) {
    const value1 = parseInt(firstHalf.charAt(i));
    const value2 = parseInt(secondHalf.charAt(i));
    firstSum += value1;
    secondSum += value2;
  }
  return (
    firstSum === secondSum
      ? true
      : false
  )
}

// create a variable to hold the value of the first sum;
// create a variable to hold the value of the second sum;
// convert the number to a string
// using substring, get the first half of the string
// get the second half of the string
// loop through each half
    // convert each character back to a number
    // add up the numbers
// compare the two sums to eachother
    // return, equal ? true : false
