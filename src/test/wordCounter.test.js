import wordCounter from "../wordCounter";

test("find one word", () => {
  const text = "word";
  expect(wordCounter(text)).toEqual({ word: 1 });
});

test("find two word", () => {
  const text = "word test";
  expect(wordCounter(text)).toEqual({ word: 1, test: 1 });
});

test("find two word, one is doubled", () => {
  const text = "word word test";
  expect(wordCounter(text)).toEqual({ word: 2, test: 1 });
});

test("find words with dash", () => {
  const text = "word word test word-dash";
  expect(wordCounter(text)).toEqual({ word: 2, test: 1, "word-dash": 1 });
});

test("handles digit in numbers", () => {
  const text = "wo2rd word test word-dash";
  expect(wordCounter(text)).toEqual({ word: 1, test: 1, "word-dash": 1 });
});
