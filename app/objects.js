if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var ownProperties = [];
      for (var key in obj) {
        if(obj.hasOwnProperty(key)) {
          ownProperties.push('' + key + ': ' + obj[key]); // not sure why the test wanted this string
        }
      }
      return ownProperties;
    }
  };
});
