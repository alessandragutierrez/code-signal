function matrixElementsSum(matrix) {
  let total = 0;
  for (let floor = 0; floor < matrix.length; floor++) {
    for (let room = 0; room < matrix[floor].length; room++) {
      if (floor === 0) {
        if (matrix[floor][room] !== 0) {
          total += matrix[floor][room];
        } else if (matrix[floor + 1] !== undefined) {
          matrix[floor + 1][room] = 0;
        }
      } else {
        if (matrix[floor][room] !== 0 && matrix[floor - 1][room] !== 0) {
          total += matrix[floor][room];
        } else if (matrix[floor + 1] !== undefined) {
          matrix[floor + 1][room] = 0;
        }
      }
    }
  }
  return total;
}
