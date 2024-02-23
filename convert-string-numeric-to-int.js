/*
In JavaScript, when we perform arithmetic operations on characters, 
JavaScript implicitly converts the characters to their ASCII values before performing the operation. 
For example, if we subtract the character `'0'` from another character representing a digit, 
JavaScript interprets it as subtracting the ASCII value of `'0'` from the ASCII value of the digit character.

To convert a digit character to its corresponding numeric value, we can subtract the ASCII value of `'0'` from the ASCII value of the digit character. This way, we get the actual numeric value of the digit.

For example:
- ASCII value of `'0'`: 48
- ASCII value of `'1'`: 49
- ASCII value of `'2'`: 50
- ...

So, when we subtract the ASCII value of `'0'` from a digit character, we get its numeric value. 
  This allows us to convert a character representing a digit to its actual numeric value.

-- Program --- 
*/


const convertCharNumberToInt = (characterNumber) => {
  return characterNumber - '0';
}

console.log(typeof convertCharNumberToInt('7')); // number
