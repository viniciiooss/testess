// src/SomosiCEV.js
function SomosiCEV(num) {
  if (num % 3 === 0 && num % 5 === 0) {
      return 'SomosiCEV';
  } else if (num % 3 === 0) {
      return 'Somos';
  } else if (num % 5 === 0) {
      return 'iCEV';
  } else {
      return num.toString();
  }
}

module.exports = SomosiCEV;
