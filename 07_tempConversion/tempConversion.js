const convertToCelsius = function(n) {
  var res = (n -32) * 5/9;
  return Math.round(res * 10)/10;

};

const convertToFahrenheit = function(n) {
  var res = (n * 9/5 + 32);
  return Math.round(res * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
