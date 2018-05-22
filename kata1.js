var repeatNumbers = function (data) {
    //check if input is an array containing arrays
    for (var index = data.length - 1; index >= 0; index--) {
        if (data[index].constructor != Array) {
            console.log("Not an Array");
            return;
        }
        //check if each list index is array of 2.
        if (data[index].length != 2) {
            console.log("Every Array must only contain 2 values");
            return;
        }
    }
    //print the numbers
    var string = "";
    for (var index = 0; index < data.length; index++) {
        var num = data[index][0].toString();
        string += num.repeat(data[index][1]);
        string += ", ";
    }
    //remove the last ", " on the string
    string = string.substring(0, string.length - 2);
    return string;



};

console.log(repeatNumbers([
    [1, 10]
]));
console.log(repeatNumbers([
    [1, 2],
    [2, 3]
]));
console.log(repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
]));