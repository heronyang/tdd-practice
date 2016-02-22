var App = {
  max: function () {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }

    return max;
  },
  isOdd: function (number) {
    if (typeof number !== 'number') {
      throw Error('The given argument is not a number');
    }
    return number % 2 !== 0;
  },
  stringContainsDigit: function (string) {

    // TODO 3: implement the code here

  }
};
