var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var queueMethods = {};
  var size = 0;
  var queueposition = 1;
  var dequeue = 1;

  // Implement the methods below

  queueMethods.enqueue = function(value) {
    size++;
    storage[queueposition] = value;
    queueposition++;
  }
  

  queueMethods.dequeue = function() {
    if (size > 0) {
    var dequeueItem = storage[dequeue];
    delete storage[dequeue];
    dequeue++;
    size--;
    };
    return dequeueItem;
  }

  queueMethods.size = function() {
    return size;
  };

  return queueMethods;
};




