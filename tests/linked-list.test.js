import { describe, expect, test } from "bun:test";
import { LinkedList } from "../src/linked-list.js";

// These tests describe the assignment's contract (what must come out),
// not the implementation (how to get there).
// They deliberately rely on toString(), which is part of the contract.

function listOf(...items) {
  const list = new LinkedList();
  for (const item of items) list.append(item);
  return list;
}

describe("LinkedList", () => {
  test("une nouvelle liste est vide", () => {
    const list = new LinkedList();
    expect(list.size()).toBe(0);
    expect(list.head()).toBeUndefined();
    expect(list.tail()).toBeUndefined();
    expect(list.toString()).toBe("");
  });

  test("append ajoute un nœud à la fin", () => {
    const list = listOf("dog", "cat");
    expect(list.toString()).toBe("( dog ) -> ( cat ) -> null");
  });

  test("prepend ajoute un nœud au début", () => {
    const list = listOf("cat");
    list.prepend("dog");
    expect(list.toString()).toBe("( dog ) -> ( cat ) -> null");
  });

  test("size renvoie le nombre de nœuds", () => {
    expect(listOf().size()).toBe(0);
    expect(listOf("a").size()).toBe(1);
    expect(listOf("a", "b", "c").size()).toBe(3);
  });

  test("head renvoie la valeur du premier nœud", () => {
    expect(listOf("dog", "cat").head()).toBe("dog");
  });

  test("tail renvoie la valeur du dernier nœud", () => {
    expect(listOf("dog", "cat", "parrot").tail()).toBe("parrot");
  });

  test("at renvoie la valeur à l'index donné", () => {
    const list = listOf("dog", "cat", "parrot");
    expect(list.at(0)).toBe("dog");
    expect(list.at(1)).toBe("cat");
    expect(list.at(2)).toBe("parrot");
  });

  test("at renvoie undefined hors des bornes", () => {
    const list = listOf("dog", "cat");
    expect(list.at(2)).toBeUndefined();
    expect(list.at(99)).toBeUndefined();
    expect(list.at(-1)).toBeUndefined();
  });

  test("pop retire le premier nœud et renvoie sa valeur", () => {
    const list = listOf("dog", "cat");
    expect(list.pop()).toBe("dog");
    expect(list.toString()).toBe("( cat ) -> null");
    expect(list.size()).toBe(1);
  });

  test("pop renvoie undefined sur une liste vide", () => {
    expect(listOf().pop()).toBeUndefined();
  });

  test("contains dit si une valeur est dans la liste", () => {
    const list = listOf("dog", "cat");
    expect(list.contains("cat")).toBe(true);
    expect(list.contains("parrot")).toBe(false);
  });

  test("findIndex renvoie l'index de la première correspondance", () => {
    const list = listOf("dog", "cat", "dog");
    expect(list.findIndex("dog")).toBe(0);
    expect(list.findIndex("cat")).toBe(1);
  });

  test("findIndex renvoie -1 quand la valeur est absente", () => {
    expect(listOf("dog", "cat").findIndex("parrot")).toBe(-1);
  });

  test("toString formate toute la liste", () => {
    const list = listOf("dog", "cat", "parrot");
    expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> null");
  });
});

describe("LinkedList (extra credit)", () => {
  test("insertAt insère plusieurs valeurs à un index", () => {
    const list = listOf(1, 2, 3);
    list.insertAt(1, 10, 11);
    expect(list.toString()).toBe("( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null");
  });

  test("insertAt peut insérer au début et à la fin", () => {
    const list = listOf("cat");
    list.insertAt(0, "dog");
    list.insertAt(2, "parrot");
    expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> null");
  });

  test("insertAt lève RangeError hors des bornes", () => {
    const list = listOf("dog");
    expect(() => list.insertAt(-1, "x")).toThrow(RangeError);
    expect(() => list.insertAt(2, "x")).toThrow(RangeError); // size = 1
  });

  test("removeAt retire le nœud à l'index donné", () => {
    const list = listOf("dog", "cat", "parrot");
    list.removeAt(1);
    expect(list.toString()).toBe("( dog ) -> ( parrot ) -> null");
    list.removeAt(0);
    expect(list.toString()).toBe("( parrot ) -> null");
    expect(list.size()).toBe(1);
  });

  test("removeAt lève RangeError hors des bornes", () => {
    const list = listOf("dog");
    expect(() => list.removeAt(-1)).toThrow(RangeError);
    expect(() => list.removeAt(1)).toThrow(RangeError); // size = 1
  });
});
