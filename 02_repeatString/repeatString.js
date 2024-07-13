const repeatString = function(word, times) {
    let repeatWord = "";

    if (times < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < times; i++){
            repeatWord += word;
        }
        return repeatWord;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
