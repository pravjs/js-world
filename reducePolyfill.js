const expenses = [30, 23, 51, 8, 27, 92, 63, 12];

const mySpending = expenses.reduce((total, expense) => total + expense, 0);

console.log(mySpending);

Array.prototype.myReduce = function(callback, initialValue) {
    const _thisArray = this;
    let accumulatedValue = initialValue;

    for(let i = 0; i < _thisArray.length; i++) {
        accumulatedValue = callback(accumulatedValue, _thisArray[i], i);
    }
    
    return accumulatedValue;
}

const mySpending2 = expenses.myReduce((total, expense) => total + expense, 100);

console.log(mySpending2);
