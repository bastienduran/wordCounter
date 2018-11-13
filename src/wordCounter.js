const pattern = /\b([A-z]|[àáâãäåçèéêëìíîïðòóôõöùúûüýÿ]){3,}(-[A-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+)?\b/g;

const getMatchRegex = text => text.match(pattern);

const wordCounter = text => {
  if (typeof text === 'string' && text !== "") {
    return getMatchRegex(text).reduce((acc, curr) => {
      if (typeof acc[curr] === "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});
  }
  return {};
};

export default wordCounter;
