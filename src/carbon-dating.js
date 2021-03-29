

const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0;
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (isNaN(parseFloat(sampleActivity))||Number(sampleActivity) <= 0||Number(sampleActivity)>15||typeof(sampleActivity)!="string")  {
    return false
  }
     return result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  
};