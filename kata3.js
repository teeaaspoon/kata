var talkingCalendar = function (date) {
    // check if date is a string
    if (date.constructor != String) {
        console.log("Please Enter Date in YYYY/MM/DD format");
        return;
    }
    //check if string is 10 characters long
    if (date.length != 10) {
        console.log("Please Enter Date in YYYY/MM/DD format");
        return;
    }
    //check if there is a / on the 4th and 7th character
    if (date[4] != "/" && date[7] != "/") {
        console.log("Please Enter Date in YYYY/MM/DD format");
        return;
    }
    var string = "";
    var year = Number(date.substring(0, 4));
    var month = Number(date.substring(5, 7));
    var day = Number(date.substring(8, 10));
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //check if month number less than 12
    if (month > 12 || month <= 0) {
        console.log("Invalid Date");
        return;
    }
    //change month to name of month
    month = monthNames[month - 1]
    //change day to add th at the end
    if (day === 1) {
        day = day + "st, ";
    } else if (day === 2) {
        day = day + "nd, ";
    } else if (day === 3) {
        day = day + "rd, ";
    } else if (day >= 4 && day <= 31) {
        day = day + "th, ";
    } else {
        console.log("Invalid Date");
        return;
    }


    string = month + " " + day + year;
    return string;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));