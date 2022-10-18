const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null
    this.next = null
  }

  push(element) {
    this.next = this.head
    this.head = element
  }

  pop() {
    const item = this.head
    this.head = this.next
    return item
  }

  peek() {
    return this.head
  }
}

module.exports = {
  Stack,
}
