const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(head = null) {
    this.head = null
    this.tail = this.head
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let newQueueNode = new ListNode(value)

    if (!this.head) {
      this.head = newQueueNode
      this.tail = this.head
    }

    this.tail.next = newQueueNode
    this.tail = newQueueNode
  }

  dequeue() {
    const item = this.head
    this.head = this.head.next
    return item.value
  }
}

module.exports = {
  Queue,
}
