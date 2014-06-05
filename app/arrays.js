if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var index = -1;
      for(var i=0 ; i < arr.length ; i++) {
        if (arr[i] === item) {
          index = i;
          break;
        } 
      }
      return index;
    },

    sum : function(arr) {
      var total = 0;
      for(var i = 0; i < arr.length; i++) {
        total += arr[i]; 
      }
      return total;
    },

    remove : function(arr, item) {
      var result = [];
      for(var i in arr) {
        if(arr[i] != item) {
          result.push(arr[i]);
        }
      }
      return result;
    },

    removeWithoutCopy : function(arr, item) {
      var result = [];
      for(var i in arr) {
        if(arr[i] != item) {
          result.push(arr[i]);
        }
      }
      arr.splice(0, arr.length);
      for(var i in result) {
        arr.push(result[i]);
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.splice(arr.length-1, 1);
      return arr;
    },

    prepend : function(arr, item) {
      var newArr = [];
      newArr.push(item);
      for(var i in arr) {
        newArr.push(arr[i]);
      }
      return newArr;
    },

    curtail : function(arr) {
      arr.splice(0,1);
      return arr;
    },

    concat : function(arr1, arr2) {
      for(var i in arr2) {
        arr1.push(arr2[i]);
      }
      return arr1;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var theCount = 0;
      for(var i in arr) {
        if(arr[i] === item) {
          theCount ++;
        }
      }
      return theCount;
    },

    duplicates : function(arr) {
      var dups = [];
      var sortedArr = arr.sort();
      var currentValue = null;
      var pushed = false;
      for(var i in sortedArr) {
        if(sortedArr[i] === currentValue && pushed === false) {
          dups.push(currentValue);
          pushed = true;
        }
        else {
          currentValue = sortedArr[i];
          pushed = false;
        }
      }
      return dups;
    },

    square : function(arr) {
      var squares = [];
      for(var i in arr) {
        squares.push(arr[i]*arr[i]);
      }
      return squares;
    },

    findAllOccurrences : function(arr, target) {
      var occurrences = [];
      for(var i in arr) {
        if(arr[i] == target) {
          occurrences.push(i);
        }
      }
      return occurrences;
    }
  };
});
