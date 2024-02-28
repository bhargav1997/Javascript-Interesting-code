// Code 0
console.log(0 == -0); // true
console.log(0 === -0);  // true
console.log(Object.is(0, -0));  // false

// Code 1
const x = [] + {}; // What will be the value of x?
console.log(x); // Output: "[object Object]"

// Code 2
const y = [] - []; // What will be the value of y?
console.log(y); // Output: NaN

// Code 3
const z = {} + []; // What will be the value of z?
console.log(z); // Output: "0"

// Code 4
const a = [1, 2, 3] - [1]; // What will be the value of a?
console.log(a); // Output: 1

// Code 5
const b = [1] + [1]; // What will be the value of b?
console.log(b); // Output: "11"

// Code 6
const c = 1 + 2 + "3"; // What will be the value of c?
console.log(c); // Output: "33"

// Code 7
const d = "1" - 1 + 2; // What will be the value of d?
console.log(d); // Output: 2

// Code 8
const e = 1 + "2" + 3; // What will be the value of e?
console.log(e); // Output: "123"

// Code 9
const f = "1" + 2 - 1; // What will be the value of f?
console.log(f); // Output: 11

// Code 10
const g = true + true; // What will be the value of g?
console.log(g); // Output: 2

// Code 11
const h = true + false; // What will be the value of h?
console.log(h); // Output: 1

// Code 12
const i = false + true; // What will be the value of i?
console.log(i); // Output: 1

// Code 13
const j = false - true; // What will be the value of j?
console.log(j); // Output: -1

// Code 14
const k = true - false; // What will be the value of k?
console.log(k); // Output: 1

// Code 15
const l = "1" - - "1"; // What will be the value of l?
console.log(l); // Output: 2

// Code 16
const m = !!"false" == !!"true"; // What will be the value of m?
console.log(m); // Output: true

// Code 17
const n = !!"" == !!"false"; // What will be the value of n?
console.log(n); // Output: false

// Code 18
const o = !!"false" == !!"0"; // What will be the value of o?
console.log(o); // Output: true

// Code 19
const p = !!"true" == !!"1"; // What will be the value of p?
console.log(p); // Output: true

// Code 20
const q = !!"false" == !!"true"; // What will be the value of q?
console.log(q); // Output: true

// Code 21
const r = !!"false" === !!"0"; // What will be the value of r?
console.log(r); // Output: false

// Code 22
const s = !!"true" === !!"1"; // What will be the value of s?
console.log(s); // Output: true

// Code 23
const t = !!"false" === !!"true"; // What will be the value of t?
console.log(t); // Output: true

// Code 24
const u = !!"false" === !!""; // What will be the value of u?
console.log(u); // Output: true

// Code 25
const v = !!"true" === !!"false"; // What will be the value of v?
console.log(v); // Output: false
