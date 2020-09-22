/* eslint-disable */

const CHAR_CODE_FOR_A = 65;
const CHAR_CODE_FOR_Z = 90;
const TOTAL_ALPHABET_COUNT = 26;
const LETTER_SHIFT_BY_PLACES = 13;

function rot13(str) {
  const letterCiphers = [];

  for (const letter of str) {
    const letterCharCode = letter.charCodeAt(0);
    if (isLetterCapital(letterCharCode))
      letterCiphers.push(getCipherForLetter(letterCharCode));
    else letterCiphers.push(letter);
  }

  return letterCiphers.join("");
}

function getCipherForLetter(letterCharCode) {
  return String.fromCharCode(calculateCipherCode(letterCharCode));
}

function calculateCipherCode(letterCharCode) {
  return (
    ((letterCharCode - CHAR_CODE_FOR_A + LETTER_SHIFT_BY_PLACES) %
      TOTAL_ALPHABET_COUNT) +
    CHAR_CODE_FOR_A
  );
}

function isLetterCapital(letterCharCode) {
  return letterCharCode >= CHAR_CODE_FOR_A && letterCharCode <= CHAR_CODE_FOR_Z;
}

export { rot13 };
