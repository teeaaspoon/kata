var camelCase = function (input) {
    //check if input is string
    if (input.constructor != String) {
        console.log("Please Enter A String");
        return;
    }
    //separate the string at the spaces into an array
    var stringArray = input.split(" ");
    //starting at the first index, capitalize the first letter
    for (var index = 1; index < stringArray.length; index++) {
        stringArray[index] = stringArray[index][0].toUpperCase() + stringArray[index].slice(1);
    }
    //join the array back to a string
    return stringArray.join("");

};

console.log(camelCase("trance around the world"));
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));