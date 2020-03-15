const shortDescription = (letters) => {
  let cutedLetters = letters;
  if (letters.length > 70) {
    cutedLetters = letters.substring(0, 70);
  }
  return cutedLetters;
};

export default shortDescription;
