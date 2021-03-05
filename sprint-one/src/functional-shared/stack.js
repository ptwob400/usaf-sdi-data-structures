var Stack = function() {
  var size = 0;
  var storage = {};
  var stackMethods = {
  };
  
  stackMethods.push = function(value) {
    size++;
    storage[size] = value;
  };

  stackMethods.pop = function() {
   if (size > 0) {
    var pop = storage[size];
    delete storage[size];
    size--;
   }
    return pop;
  };

  
  
  
  stackMethods.size = function() {
    return size;
  }

  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return stackMethods;
};





