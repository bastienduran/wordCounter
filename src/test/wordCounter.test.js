import wordCounter from "../wordCounter";

test("handles empty string", () => {
  const text = "";
  expect(wordCounter(text)).toEqual({});
});

test("handles no params", () => {
  expect(wordCounter()).toEqual({});
});

test("ingore numbers", () => {
  expect(wordCounter(1)).toEqual({});
});

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

test("ignore words shorter than three letters", () => {
  const text = "me you I";
  expect(wordCounter(text)).toEqual({ you: 1 });
});

test("handles mixed words and number", () => {
  const text = "word 1 12 1234";
  expect(wordCounter(text)).toEqual({ word: 1 });
});

test("handles specials", () => {
  const text = "françois";
  expect(wordCounter(text)).toEqual({ françois: 1 });
});
