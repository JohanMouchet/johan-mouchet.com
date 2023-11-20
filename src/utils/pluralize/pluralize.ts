/**
 * Pluralize a word
 *
 * @param word The word to pluralized
 * @param quantity Used to determine if the word needs to be pluralized
 */

export const pluralize = (word: string, quantity: number): string => {
  const vowels = ["a", "e", "i", "o", "u"];

  if (quantity > 1) {
    if (word.slice(-1) === "y" && !vowels.includes(word.slice(-2)[0])) {
      return `${word.slice(0, -1)}ies`;
    }
    return `${word}s`;
  }
  return word;
};
