const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  try {Array.isArray(arr)} catch (err) {throw new Error (err)};
  if(Array.isArray(arr) && arr.length === 0) return [];
  const resultArray = []

  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
        if(i + 1 < arr.length) i++;
        break;
      case '--discard-prev':
        if(i - 1 >= 0 && arr[i - 2] !== '--discard-next') resultArray.pop();
        break;
         case '--double-next':
        if(i + 1 < arr.length) resultArray.push(arr[i + 1]);
        break;
      case '--double-prev':
        if(i - 1 >= 0 && arr[i - 2] !== '--discard-next') resultArray.push(arr[i - 1]);
        break;
     
      
      default:
        resultArray.push(arr[i]);
    }
  
  }
  return resultArray;
}