function isVowel(char) {
  return /[aeiou]/i.test(char);
}

function reverseVowels(string) {
  let result = string.split("");
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    const leftChar = result[left];
    const rightChar = result[right];

    if (isVowel(leftChar) && isVowel(rightChar)) {
      result[left] = rightChar;
      result[right] = leftChar;

      left++;
      right--;
    }

    if (!isVowel(leftChar)) {
      left++;
    }

    if (!isVowel(rightChar)) {
      right--;
    }
  }

  return result.join("");
}

reverseVowels("hello");
reverseVowels("AEIOU");
reverseVowels("DesignGUrus");
