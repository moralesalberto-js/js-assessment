if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      //
      var result = num;

      var divisible_by = function(number, divisible) {
        return (number % divisible === 0);
      };


      if(arguments.length === 0) {
        result = false;
      }
      else if (isNaN(num)) {
        result = false;
      }
      else if (divisible_by(num, 3) && divisible_by(num, 5)) {
        result = 'fizzbuzz';
      }
      else if (divisible_by(num, 3)) {
        result = 'fizz';
      }
      else if (divisible_by(num, 5)) {
        result = 'buzz';
      }

      return result;
    }
  };
});
