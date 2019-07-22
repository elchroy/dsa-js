/** Class representing a Stack. */

class Stack {

  constructor() {
    this._nextIndex = 0;
    this._storage = {};
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    this._storage[this._nextIndex] = value;
    this._nextIndex += 1;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if (this._nextIndex) {
      let res = this._storage[this._nextIndex - 1];
      delete this._storage[this._nextIndex - 1];
      this._nextIndex -= 1;
      return res;
    }
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    return this._storage[this._nextIndex - 1];
  }
}

module.exports = Stack