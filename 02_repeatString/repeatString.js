const repeatString = function(string, numberOfTimes) {
    if(numberOfTimes < 0)
        return "ERROR";

    let aux = "";
    for(let i = 0; i < numberOfTimes; i++){
        aux += string;
    }
    return aux;
};

// Do not edit below this line
module.exports = repeatString;
