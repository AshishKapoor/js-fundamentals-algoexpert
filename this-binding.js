// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.

Function.prototype.myCall = function(thisContext, ...args) {
  const symbol = Symbol();
  thisContext[symbol] = this;

  const returnValue = thisContext[symbol](...args);
  delete thisContext[symbol];

  return returnValue;
};

Function.prototype.myApply = function(thisContext, args = []) {
  return this.myCall(thisContext, ...args);
};


Function.prototype.myBind = function(thisContext, ...args) {
  return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);
};
