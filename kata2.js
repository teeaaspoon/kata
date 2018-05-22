var conditionalSum = function (values, condition) {
    //check if values is an array
    if (values.constructor != Array) {
        console.log("Values were not placed in an array");
        return;
    }
    //check if numbers in values array are numbers
    if (values.some(isNaN)) {
        console.log("All values in array must be numbers");
        return;
    }
    var sum = 0;
    //add even numbers if condition is "even"
    if (condition == "even") {
        for (var index = 0; index < values.length; index++) {
            if (values[index] % 2 === 0) {
                sum += values[index];
            }
        }
        return sum;
    }
    //add odd numbers if condition is "odd"
    if (condition == "odd") {
        for (var index = 0; index < values.length; index++) {
            if (values[index] % 2 != 0) {
                sum += values[index];
            }
        }
        return sum;
    }
    //else return 0
    else {
        return sum;
    }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));