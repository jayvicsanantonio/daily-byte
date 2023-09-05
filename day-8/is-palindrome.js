function isAlphaNumeric(char) {
  return /[a-z0-9]/i.test(char);
}

function isPalindrome(sentence) {
  let left = 0;
  let right = sentence.length - 1;

  while (left < right) {
    let leftChar = sentence.charAt(left);
    let rightChar = sentence.charAt(right);

    while (!isAlphaNumeric(leftChar)) {
      left++;
      leftChar = sentence.charAt(left);
    }

    while (!isAlphaNumeric(rightChar)) {
      right--;
      rightChar = sentence.charAt(right);
    }

    if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

isPalindrome("A man, a plan, a canal, Panama!");
isPalindrome("Was it a car or a cat I saw?");
isPalindrome("Hello world!");
