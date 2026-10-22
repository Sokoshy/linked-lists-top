import { describe, test } from "bun:test";

// Checklist of behaviours. No assertions yet: replace each `test.todo`
// with a real test once you can describe what should happen.
describe("LinkedList", () => {
  test.todo("append(value) adds a node at the end");
  test.todo("prepend(value) adds a node at the start");
  test.todo("size() returns the total number of nodes");
  test.todo("head() returns the first value");
  test.todo("head() returns undefined when the list is empty");
  test.todo("tail() returns the last value");
  test.todo("tail() returns undefined when the list is empty");
  test.todo("at(index) returns the value at that index");
  test.todo("at(index) returns undefined when out of range");
  test.todo("pop() removes and returns the head value");
  test.todo("pop() returns undefined when the list is empty");
  test.todo("contains(value) returns true for a value in the list");
  test.todo("contains(value) returns false for an absent value");
  test.todo("findIndex(value) returns the index of the first match");
  test.todo("findIndex(value) returns -1 when absent");
  test.todo("toString() prints the full list, ending with null");
  test.todo("toString() returns an empty string when the list is empty");
});

describe("LinkedList (extra credit)", () => {
  test.todo("insertAt(index, ...values) inserts several nodes at once");
  test.todo("insertAt throws RangeError below 0 or above size");
  test.todo("removeAt(index) removes the node at that index");
  test.todo("removeAt throws RangeError when out of bounds");
});
