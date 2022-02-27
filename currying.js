// Currying is a transformation of functions that translates a function
// from callable as f(a, b, c) into callable as f(a)(b)(c).
// Ref: https://javascript.info/currying-partials

function curry(callback) {
  const curriedCallback = (...args) => {
    if (args.length === 0) {
      return callback();
    }
    return (...otherArgs) => {
      if (otherArgs.length === 0) {
        return callback(...args);
      }
      return curriedCallback(...args, ...otherArgs);
    };
  };
  return curriedCallback;
}

exports.curry = curry;
