const sumAll = function(num1, num2) {
  let finalSum = 0;

  if (((num1 < 0) || (num2 < 0)) ||
    ((num1 % 1 !== 0) && (num2 % 1 !== 0)) ||
    ((!Number.isInteger(num1)) || (!Number.isInteger(num2)))) {
      return "ERROR";
    }
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }

  while (num1 <= num2 ) {
    finalSum += num1;
    num1++;
  }
  return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
