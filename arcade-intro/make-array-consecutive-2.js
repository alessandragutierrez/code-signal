function makeArrayConsecutive2(statues) {
  var statuesSorted = bubbleSort(statues);
  var numberOfStatuesNeeded = 0;
  var integer;
  for (var i = 0; i < statuesSorted.length - 1; i++) {
    integer = statuesSorted[i] + 1;
    if (integer !== statuesSorted[i + 1]) {
      numberOfStatuesNeeded++;
      statuesSorted.splice(i + 1, 0, integer);
    }
  }
  console.log(numberOfStatuesNeeded);
  return numberOfStatuesNeeded;
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
