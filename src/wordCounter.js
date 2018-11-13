const pattern = /\b[^\d\W]+\b/g;

const getMatchRegex = text => text.match(pattern);

const wordCounter = text => {
  console.log(getMatchRegex(text));
  return getMatchRegex(text).reduce((acc, curr) => {
    if (typeof acc[curr] === "undefined") {
      acc[curr] = 1;
    }
    return acc;
  }, {});
};

export default wordCounter;
