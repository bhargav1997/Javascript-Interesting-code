let s = 'abab';

var indexCharPositions = charPos(s, 'a');

console.log(indexCharPositions); // [0, 2]

function charPos(str, char) {
   return str
      .split('')
      .map(function (c, i) {
         if (c == char) return i;
      })
      .filter(function (v) {
         return v >= 0;
      });
}
