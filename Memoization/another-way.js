function memoize(fn) {
    var para = {};
            return function(...args) {
                const argu = JSON.stringify(args);

                if(argu in para)
                {
                    return para[argu]
                }
                {
                    var temp = fn(...args);
                    para[argu] = temp;
                    return temp;
                }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
    return a + b;
})

memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5

console.log(callCount) // 1 

