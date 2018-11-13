const pattern = /\b[^\d\W]+(-[^\d\W]+)?\b/g;

const getMatchRegex = text => text.match(pattern);

const wordCounter = text => {
  return getMatchRegex(text).reduce((acc, curr) => {
    if (typeof acc[curr] === "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
};

export default wordCounter;
