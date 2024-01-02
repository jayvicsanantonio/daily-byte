function shortestDistance(words, wordA, wordB) {
  let position1 = -1;
  let position2 = -1;
  let minDistance = words.length;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (wordA === word) {
      position1 = i;
    }

    if (wordB === word) {
      position2 = i;
    }

    if (position1 !== -1 && position2 !== -1) {
      minDistance = Math.min(Math.abs(position2 - position1));
    }
  }

  return minDistance;
}

shortestDistance(
  ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
  "fox",
  "dog"
);
shortestDistance(["a", "c", "d", "b", "a"], "a", "b");
shortestDistance(["a", "b", "c", "d", "e"], "a", "e");
