const magicObjectE = {};

console.log(magicObjectE.a); // Get Undefined
console.log(magicObjectE.a); // Get Undefined
console.log(magicObjectE.a); // Get Undefined

// Need Logic, When i try to access, every time it will increase number by 1


const magicObject = {
  val:1,
  get a() {
    return this.val++;
  }
};

console.log(magicObject.a); // Get 1
console.log(magicObject.a); // Get 2
console.log(magicObject.a); // Get 3
