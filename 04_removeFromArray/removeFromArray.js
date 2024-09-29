const removeFromArray = function(array, ...args) {
    let aux = [];

    array.forEach((item) => {
        if(!args.includes(item)){
            aux.push(item);
        }
    })
    return aux;
};

// Do not edit below this line
module.exports = removeFromArray;
