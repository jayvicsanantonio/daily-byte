function isAnagram(wordA, wordB) {
  if (wordA.length !== wordB.length) {
    return false;
  }

  const freqMap = {};

  for (let i = 0; i < wordA.length; i++) {
    freqMap[wordA[i]] = (freqMap[wordA[i]] || 0) + 1;
    freqMap[wordB[i]] = (freqMap[wordB[i]] || 0) - 1;
  }

  for (let key in freqMap) {
    if (freqMap[key]) {
      return false;
    }
  }

  return true;
}

isAnagram("listen", "silent");
isAnagram("rat", "car");
isAnagram("hello", "world");
