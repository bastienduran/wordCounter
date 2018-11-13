import wordCounter from "../wordCounter";
test("find one word", () => {
  const text = "mot";
  expect(wordCounter(text)).toEqual({ mot: 1 });
});
test("find two word", () => {
  const text = "mot test";
  expect(wordCounter(text)).toEqual({ mot: 1, test: 1 });
});
test("find two word, one is doubled", () => {
  const text = "mot mot test";
  expect(wordCounter(text)).toEqual({ mot: 2, test: 1 });
});
