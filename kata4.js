var calculateChange = function (total, cash) {
    //check if total & cash parameters are int
    if (!Number.isInteger(total) || !Number.isInteger(cash)) {
        console.log("Please enter an Integer for both total and cash");
        return;
    }
    // denomination object
    var denominations = {
        twentyDollar: 0,
        tenDollar: 0,
        fiveDollar: 0,
        twoDollar: 0,
        dollar: 0,
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0,
    };
    //calculate change
    var change = cash - total;
    //separate change into denominations
    while (change > 0) {
        if (change >= 2000) {
            denominations.twentyDollar += 1;
            change -= 2000;
        } else if (change >= 1000) {
            denominations.tenDollar += 1;
            change -= 1000;
        } else if (change >= 500) {
            denominations.fiveDollar += 1;
            change -= 500;
        } else if (change >= 200) {
            denominations.twoDollar += 1;
            change -= 200;
        } else if (change >= 100) {
            denominations.dollar += 1;
            change -= 100;
        } else if (change >= 25) {
            denominations.quarter += 1;
            change -= 25;
        } else if (change >= 10) {
            denominations.dime += 1;
            change -= 10;
        } else if (change >= 5) {
            denominations.nickel += 1;
            change -= 5;
        } else if (change >= 1) {
            denominations.penny += 1;
            change -= 1;
        }
    }
    //remove empty keys out of denominations object
    for (var key in denominations) {
        if (denominations[key] === 0) {
            delete denominations[key];
        }


    }
    return denominations;

};




console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));