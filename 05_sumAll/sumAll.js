const sumAll = function(startingNumber, endingNumber) {

    if( startingNumber > endingNumber){
        startingNumber = startingNumber + endingNumber; // 4 + 1 = 5
        endingNumber = startingNumber - endingNumber;   // 5 - 1 = 4
        startingNumber = startingNumber - endingNumber; //5 - 4 = 1
    }
    
    if((startingNumber < 0 || endingNumber < 0) || typeof(startingNumber) != "number" || typeof(endingNumber) != "number"){
        
        return "ERROR";

    } else {
        
        let sum = 0;

        for (let index = startingNumber; index <= endingNumber; index++) {
        
            sum += index;    
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
