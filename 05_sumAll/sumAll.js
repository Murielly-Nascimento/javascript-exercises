const sumAll = function(firstNumber, secondNumber) {
    let sum = 0, first = firstNumber, second = secondNumber;

    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber))
        return "ERROR";

    else if(firstNumber < 0 || secondNumber < 0)
        return "ERROR";
    
    else if(secondNumber < firstNumber){
        first = secondNumber;
        second = firstNumber;
    }

    for(let i = first; i <= second; i++)
        sum += i;
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
