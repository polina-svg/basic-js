const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    let result = 0;
    matrix.forEach(element => {
      element.forEach (element => {
        if (element === "^^")
        result = result + 1;
      })
      })
      return result;
};
