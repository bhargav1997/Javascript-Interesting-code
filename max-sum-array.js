// Find Maximum, array sum from the arrays EX: [[1,2,3],[3,2,2]] =  7 is Max sum from the both arrays

var maximumSum = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce((acc, val) => acc + val, 0);
        maxWealth = Math.max(maxWealth, wealth);
    }
    return maxWealth;
};
