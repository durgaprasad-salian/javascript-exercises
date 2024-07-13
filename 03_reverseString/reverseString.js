const reverseString = function(word) {
    let inputStingArray = [];
    let reversedString = "";

    for ( let i = 0; i < word.length; i++){
        
        inputStingArray[i] = word.charAt(i);
    }

    for (let index = word.length - 1; index >= 0; index--) {
        
        reversedString += inputStingArray[index];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
