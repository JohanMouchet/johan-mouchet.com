// @flow

const pluralize = (word: string, quantity: number) => {
  const vowels = ["a", "e", "i", "o", "u"];

  if (quantity > 1) {
    if (word.slice(-1) === "y" && !vowels.includes(word.slice(-2)[0])) {
      return `${word.slice(0, -1)}ies`;
    } else {
      return `${word}s`;
    }
  } else {
    return word;
  }
};

export default pluralize;