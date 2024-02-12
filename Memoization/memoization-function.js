function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
}

function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function getCallCount() {
    return Object.keys(cache).length;
}

function runActions(fnName, actions, values) {
    const results = [];
    let memoizedFn;

    switch (fnName) {
        case "sum":
            memoizedFn = memoize(sum);
            break;
        case "fib":
            memoizedFn = memoize(fib);
            break;
        case "factorial":
            memoizedFn = memoize(factorial);
            break;
        default:
            throw new Error("Invalid function name");
    }

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const value = values[i];

        if (action === "call") {
            results.push(memoizedFn(...value));
        } else if (action === "getCallCount") {
            results.push(getCallCount());
        } else {
            throw new Error("Invalid action");
        }
    }

    return results;
}

// Example usage:
const fnName = "sum";
const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];

console.log(runActions(fnName, actions, values)); // Output: [4, 4, 1, 3, 2]

