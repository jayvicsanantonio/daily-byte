// Array-based Solution
// class Stack {
//   #items = [];

//   push(item) {
//     this.#items.push(item);

//     return this.#items.length;
//   }

//   pop() {
//     return this.isEmpty() ? undefined : this.#items.pop();
//   }

//   isEmpty() {
//     return this.length() === 0;
//   }

//   peek() {
//     return this.isEmpty() ? undefined : this.#items[this.length() - 1];
//   }

//   length() {
//     return this.#items.length;
//   }
// }

// Linked List-based Solution
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Stack {
  #head = null;
  #tail = null;
  #length = 0;

  push(item) {
    const node = new Node(item);

    if (this.#head === null) {
      this.#head = node;
    } else {
      this.#tail.next = node;
      node.prev = this.#tail;
    }

    this.#tail = node;
    this.#length++;

    return this.#length;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const value = this.#tail.value;
    this.#tail = this.#tail.prev;
    this.#length--;

    return value;
  }

  isEmpty() {
    return this.length() === 0;
  }

  peek() {
    return this.isEmpty() ? undefined : this.#tail.value;
  }

  length() {
    return this.#length;
  }
}

export default Stack;
