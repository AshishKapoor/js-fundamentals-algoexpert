/**
 * Debounce internals
 * @param {*} callback should return a new debounce function
 * @param {*} delay in milliseconds
 * @param {*} immediate boolean
 * @returns 
 */

function debounce(callback, delay, immediate = false) {
  let timerID;

  return function(...rest) {
    clearTimeout(timerID);

    if (immediate && timerID == undefined) {
      callback.apply(this, rest);
    }

    timerID = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, rest);
      }
      timerID = null;
    }, delay);
  }  
}

// Do not edit the line below.
exports.debounce = debounce;
