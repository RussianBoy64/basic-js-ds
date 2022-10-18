const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data)

    function addNode(node, data) {
      if (!node) return new Node(data)

      if (node.data === data) return node

      if (node.data < data) node.right = addNode(node.right, data)

      if (node.data > data) node.left = addNode(node.left, data)

      return node
    }
  }

  has(data) {
    return hasData(this.rootNode, data)

    function hasData(node, data) {
      if (!node) return false

      if (node.data === data) return true

      if (node.data < data) {
        return hasData(node.right, data)
      } else {
        return hasData(node.left, data)
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data)

    function findNode(node, data) {
      if (!node) return null

      if (node.data === data) return node

      if (node.data < data) {
        return findNode(node.right, data)
      } else {
        return findNode(node.left, data)
      }
    }
  }

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data)

    function deleteNode(node, data) {
      if (!node) return null

      if (data < node.data) {
        node.left = deleteNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) return null

        if (!node.left) return node.right

        if (!node.right) return node.left

        let maxFromLeft = node.left
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }

        node.data = maxFromLeft.data

        node.left = deleteNode(node.left, maxFromLeft.data)

        return node
      }
    }
  }

  min(firstNode = this.rootNode) {
    if (!firstNode) return null

    let node = this.rootNode

    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max(firstNode = this.rootNode) {
    if (!firstNode) {
      return null
    }

    let node = this.rootNode

    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}
