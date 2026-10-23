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
    // TODO
  }

  at(index) {
    // TODO
  }

  pop() {
    // TODO
  }

  contains(value) {
    // TODO
  }

  findIndex(value) {
    // TODO
  }

  toString() {
    // TODO
  }

  // Extra credit
  insertAt(index, ...values) {
    // TODO
  }

  removeAt(index) {
    // TODO
  }
}
