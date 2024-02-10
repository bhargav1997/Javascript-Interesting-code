/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
*/



/**
 * Way 1: By Leet Dev
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    function rec(index, value) {
        if (index < 0) {
            return value;
        }
        value = functions[index](value);
        return rec(index - 1, value);
    }

    return function(x) {
        return rec(functions.length - 1, x);
    }
};


/**
 * By Me
 * @param {Function[]} functions
 * @return {Function}
 */
let compose = function(functions) {
    
    return function(x) {
        if (functions.length === 0) {
            return x; // Identity function
        }
        
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

const fn = compose([x => x + 1, x => 2 * x])

fn(4) // 9


/* Using recursion solve the Leet code puzzle (By Leet Code Member : Runtime: 64ms))*/
