// Array polyfills

Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i=0; i < this.length; i++) {
    output.push(callback(this[i], i , this))
  }
  return output;
}

Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i=0; i < this.length; i++) {
    if (callback(this[i], i , this) === true) {
      output.push(this[i]);
    }
  }
  return output;
}

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    if(i === 0 && initialValue === undefined) {
      acc = this[i];
    } else {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc;
}
