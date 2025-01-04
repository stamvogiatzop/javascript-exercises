const repeatString = function(string, num) {
  if (num < 0) return "ERROR";
  let word = "";
  for (; num > 0; num--) {
    word = word.concat(string);
    // ALSO possible, maybe even better:
    // word += string;
  }
  return word;
};

// Do not edit below this line
module.exports = repeatString;
