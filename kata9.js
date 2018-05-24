function squareCode(string) {
    //check if string was input
    if (string.constructor != String) {
        console.log("Please enter a string");
        return;
    }

    //remove the spaces from the string and make it lower case
    string = string.split(" ");
    string = string.join("");
    string = string.toLowerCase();

    //check if under 81 characters
    if (string.length > 81) {
        console.log("Please enter a string less than 81 characters");
        return;
    }

    //find 2 numbers that multiply to string.length
    console.log(string.length);
    var rows = Math.round(Math.sqrt(string.length));
    var columns = Math.ceil(string.length / rows);
    console.log(rows, columns);

    //make an array splitting at every column number
    var stringArray = [];

    while (string.length) {
        stringArray.push(string.substring(0, columns));
        string = string.substring(columns);
    }

    //make a new array with the first character of every element in stringArray
    var encodedArray = [];
    for (var i = 0; i < columns; i++) {
        encodedArray.push(stringArray.map(x => x[i]).join(""));
    }
    encodedArray = encodedArray.join(" ");
    return encodedArray;
}

console.log(squareCode("haveaniceday"));
console.log(squareCode("feedthedog"));
console.log(squareCode("chillout"));
console.log(squareCode("trance around the world"));
console.log(
    squareCode(
        "If man was meant to stay on the ground god would have given us roots"
    )
);

/*
feed
thed
og



chi
llo
ut

clu
hlt
io

[feed, thed, og]
*/
