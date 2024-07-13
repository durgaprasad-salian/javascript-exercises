const removeFromArray = function(inputArray) {

    const args = Array.prototype.slice.call(arguments, 1);

    filteredInput = inputArray.filter(value => !(args.includes(value)))

    return filteredInput;
};

// Do not edit below this line
module.exports = removeFromArray;
