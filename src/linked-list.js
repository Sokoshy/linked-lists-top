/**
 * LinkedList — the full list.
 *
 * Contract from the assignment:
 *   append(value)              add a node at the end
 *   prepend(value)             add a node at the start
 *   size()                     total number of nodes
 *   head()                     value of the first node, undefined when empty
 *   tail()                     value of the last node, undefined when empty
 *   at(index)                  value at that index, undefined when out of range
 *   pop()                      remove the head node and return its value,
 *                              undefined when the list is empty
 *   contains(value)            true / false
 *   findIndex(value)           index of the first matching node, -1 if absent
 *   toString()                 "( a ) -> ( b ) -> null", "" when empty
 *
 * Extra credit:
 *   insertAt(index, ...values) throws RangeError when index < 0 or index > size
 *   removeAt(index)            throws RangeError when index < 0 or index >= size
 *
 * Every body below is empty on purpose: that is the exercise.
 */
import { Node } from "./node";

export class LinkedList {
  constructor() {
    this.headNode = null;
    this.count = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if(this.headNode === null){
      this.headNode = newNode;
    }else{
      let current = this.headNode;
      while(current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    this.count++;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;

    this.count++;
  }

  size() {
    return this.count;
  }

  head() {
    if (this.headNode === null) return undefined;
    return this.headNode.value;
  }

  tail() {
    if (this.headNode === null) return undefined;

    let current = this.headNode;

    while(current.nextNode !== null) {
      current = current.nextNode;
    }

    return current.value;
  }

  at(index) {
    if(index < 0) return undefined;

    let i = 0;
    let current = this.headNode;
    while(current !== null && i !== index) {
      current = current.nextNode;
      i++;
    }

    if (current === null) return undefined;
    return current.value;
  }

  pop() {
    if (this.headNode === null) return undefined;

    const currentHead = this.headNode;
    const currentNextNode = this.headNode.nextNode;

    if(currentNextNode !== null){
      this.headNode = currentNextNode;
    }else {
      this.headNode = null;
    }

    this.count--;

    return currentHead.value;
  }

  contains(value) {
    let current = this.headNode;
    let i = 0;

    while(i <= this.count && current !== null) {
      if(current.value === value){
        return true;
      }
      current = current.nextNode;
      i++;
    }

    return false;
  }

  findIndex(value) {
    if (this.headNode === null) return -1;

    let current = this.headNode;

    for (let i = 0; i < this.count; i++) {
    if (current.value === value) {
      return i;
    }
    current = current.nextNode;
    }

  return -1;
  }

  toString() {
    let resultToString = "";

    if(this.headNode === null) return resultToString;

    let current = this.headNode;

    for (let i = 0; i < this.count; i++) {
      resultToString += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    resultToString += "null";

    return resultToString;
  }

  // Extra credit
  insertAt(index, ...values) {
    // TODO
  }

  removeAt(index) {
    // TODO
  }
}
