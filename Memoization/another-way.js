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
