function commonCharacterCount(s1, s2) {
  let commonCount = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1.charAt(i))) {
      commonCount++;
      s2 = s2.replace(s1.charAt(i), '');
    }
  }
  return commonCount;
}
