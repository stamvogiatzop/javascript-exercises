const convertToCelsius = function(grade) {
  let celsiusGrade = parseFloat(((grade - 32) * (5 / 9)).toFixed(1));
  return celsiusGrade;
};

const convertToFahrenheit = function(grade) {
  let fahrenheitGrade = parseFloat((grade * (9 / 5) + 32).toFixed(1));
  return fahrenheitGrade;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
