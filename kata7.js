function makeCase(string, style) {
    //check to see if string is string
    if (string.constructor != String) {
        console.log("Please input a string");
        return;
    }
    //check to see if style is a string or array
    if (style.constructor != String && style.constructor != Array) {
        console.log(
            "Please choose from camel, pascal, snake, kebab, title, vowel, consonant, upper, or lower"
        );
    }
    var result = "";

    //do camel, pascal, snake, kebab, or title
    if (style === "camel") {
        result = camel(string);
        return result;
    } else if (style === "pascal") {
        result = pascal(string);
        return result;
    } else if (style === "snake") {
        result = snake(string);
        return result;
    } else if (style === "kebab") {
        result = kebab(string);
        return result;
    } else if (style === "title") {
        result = title(string);
        return result;
    } else if (style === "vowel") {
        result = vowel(string);
        return result;
    } else if (style === "consonant") {
        result = consonant(string);
        return result;
    } else if (style === "upper") {
        result = upper(string);
        return result;
    } else if (style === "lower") {
        result = lower(string);
        return result;
    }
    //if its an array
    if (style.constructor === Array) {
        if (style.includes("camel")) {
            string = camel(string);
        }
        if (style.includes("pascal")) {
            string = pascal(string);
        }
        if (style.includes("snake")) {
            string = snake(string);
        }
        if (style.includes("kebab")) {
            string = kebab(string);
        }
        if (style.includes("title")) {
            string = title(string);
        }
        if (style.includes("vowel")) {
            string = vowel(string);
        }
        if (style.includes("consonant")) {
            string = consonant(string);
        }
        if (style.includes("upper")) {
            string = upper(string);
        }
        if (style.includes("lower")) {
            string = lower(string);
        }
    }
    return string;
}

function camel(string) {
    //separate the string at spaces into an array
    var stringArray = string.split(" ");
    //make every word but the first word capitalized
    for (var index = 1; index < stringArray.length; index++) {
        stringArray[index] =
            stringArray[index][0].toUpperCase() + stringArray[index].slice(1);
    }
    //return camelcase
    return stringArray.join("");
}

function pascal(string) {
    //separate string into an array at spaces
    var stringArray = string.split(" ");
    //capitalize every word
    for (var index = 0; index < stringArray.length; index++) {
        stringArray[index] =
            stringArray[index][0].toUpperCase() + stringArray[index].slice(1);
    }
    //return pascal
    return stringArray.join("");
}

function snake(string) {
    //split string into an array and rejoin with _
    var result = "";
    result = string.split(" ");
    result = result.join("_");
    return result;
}
function kebab(string) {
    var result = "";
    result = string.split(" ");
    result = result.join("-");
    return result;
}
function title(string) {
    //split string into an array at spaces
    var stringArray = string.split(" ");
    //capitalize every word
    for (var index = 0; index < stringArray.length; index++) {
        stringArray[index] =
            stringArray[index][0].toUpperCase() + stringArray[index].slice(1);
    }
    //join the array with a space
    return stringArray.join(" ");
}
function vowel(string) {
    //split string into an array
    var stringArray = string.split("");
    //go through every character, if there is a vowel capitalize it
    var vowels = ["a", "e", "i", "o", "u"];
    for (var index = 0; index < stringArray.length; index++) {
        if (vowels.includes(stringArray[index])) {
            stringArray[index] = stringArray[index].toUpperCase();
        }
    }
    return stringArray.join("");
}
function consonant(string) {
    //upper case the entire string
    string = string.toUpperCase();
    //split string into an array
    var stringArray = string.split("");
    //go through every character, if there is a vowel lowercase it
    var vowels = ["A", "E", "I", "O", "U"];
    for (var index = 0; index < stringArray.length; index++) {
        if (vowels.includes(stringArray[index])) {
            stringArray[index] = stringArray[index].toLowerCase();
        }
    }
    return stringArray.join("");
}
function upper(string) {
    var result = string.toUpperCase();
    return result;
}
function lower(string) {
    var result = string.toLowerCase();
    return result;
}
console.log(makeCase("trance around the world", "camel"));
console.log(makeCase("trance around the world", "pascal"));
console.log(makeCase("trance around the world", "snake"));
console.log(makeCase("trance around the world", "kebab"));
console.log(makeCase("trance around the world", "title"));
console.log(makeCase("trance around the world", "vowel"));
console.log(makeCase("trance around the world", "consonant"));
console.log(makeCase("trance around the world", ["upper", "snake"]));
console.log(makeCase("trance around the world", ["camel", "vowel"]));
