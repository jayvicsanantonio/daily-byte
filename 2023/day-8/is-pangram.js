function isPangram(sentence) {
  const set = new Set();

  for (let char of sentence.toLowerCase()) {
    set.add(char);
  }

  return set.size === 26;
}

isPangram("TheQuickBrownFoxJumpsOverTheLazyDog");
isPangram("This is not a pangram");
