const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  try {Array.isArray(arr)} catch (err) {throw new Error (err)};
  
};
