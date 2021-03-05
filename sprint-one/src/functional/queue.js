var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
  };
  var size = 0;
  var queueposition = 1;
  var dequeue = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[queueposition] = value;
    queueposition++;
  }
  

  someInstance.dequeue = function() {
    if (size > 0) {
    var dequeueItem = storage[dequeue];
    delete storage[dequeue];
    dequeue++;
    size--;
    };
    return dequeueItem;
  }

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
