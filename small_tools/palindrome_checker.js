function palindrome(str) {
  const newStr = str.replace(/[^a-zA-Z0-9]|\s+/g, '')
  const lowStr = newStr.toLowerCase();
  const copy = lowStr.slice()
  const palindromeArr = []
  for (var i = 0; i < copy.length; i++) {
    palindromeArr.unshift(copy[i])
  } 
  let palindrome = palindromeArr.join("")
if (palindrome === lowStr) {
  return true;
} else {
  return false;
}
}

palindrome("almostomla");
