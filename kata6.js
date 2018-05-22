var multiplicationTable = function(maxValue) {
    //check to see if maxValue is an integer
    if (!Number.isInteger(maxValue)) {
        console.log("Please enter an integer");
        return;
    }
    // calculate how long the horizontal line should be
    var line = horizontalLine(maxValue);

    // create the values in the multiplication table
    var table = line;
    for (var i = 1; i <= maxValue; i++) {
        table += "\n";
        table += "|";

        for (var j = 1; j <= maxValue; j++) {
            //print the horizontal
            if (i == 1 && j >= 1) {
                if (j >= 10) {
                    table += " " + j + "   ";
                } else {
                    table += " " + j + "    ";
                }
            } else if (j == 1 && i > 1) {
                //print the vertical
                if (i > 9) {
                    table += " " + i + "   ";
                } else {
                    table += " " + i + "    ";
                }
            } else if (i > 0 && j > 0) {
                //print the multiplied numbers and spaces them out
                if (i * j >= 100) {
                    table += " " + i * j + "  ";
                } else if (i * j > 9) {
                    table += " " + i * j + "   ";
                } else {
                    table += " " + i * j + "    ";
                }
            }
            table += "|";
        }
        table += "\n";
        table += line;
    }
    return table;
};

function horizontalLine(maxValue) {
    // do +---- times maxValue, then add a + at the end
    var string = "";
    var render = "+------";
    for (var index = 0; index < maxValue; index++) {
        string += render;
    }
    string += "+";
    return string;
}

console.log(multiplicationTable(10));
