function centuryFromYear(year) {
  var centuryStart = 1;
  var centuryEnd = 100;
  var century = 1;
  for (var i = 0; i < Infinity; i++) {
    if (year >= centuryStart && year <= centuryEnd) {
      return century;
    } else {
      centuryStart += 100;
      centuryEnd += 100;
      century += 1;
    }
  }
}
