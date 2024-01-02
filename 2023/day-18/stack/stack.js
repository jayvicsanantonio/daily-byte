// Linked-List-Based
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack {
  #top = null;
  #length = 0;

  push(value) {
    const node = new Node(value);

    if (!this.#top) {
      this.#top = node;
    } else {
      node.next = this.#top;
      console.log(node);
      this.#top = node;
    }

    return ++this.#length;
  }

  pop() {
    const value = this.#top?.value;
    this.#top = this.#top?.next;

    this.#length--;
    return value;
  }

  isEmpty() {
    return this.length() === 0;
  }

  length() {
    return this.#length;
  }

  peek() {
    // console.log(this.#top);
    return this.#top?.value;
  }
}

// Array-Based
// export default class Stack {
//   #content = [];

//   push(value) {
//     this.#content.push(value);

//     return this.length();
//   }

//   pop() {
//     return this.#content.pop();
//   }

//   isEmpty() {
//     return this.length() === 0;
//   }

//   length() {
//     return this.#content.length;
//   }

//   peek() {
//     return this.#content[this.length() - 1];
//   }
// }
