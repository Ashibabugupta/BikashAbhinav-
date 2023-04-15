

function getNumberOfDays(month) {

    // Check for 31 Days
    if (month == 1 || month == 3 || month == 5 ||
        month == 7 || month == 8 || month == 10 ||
        month == 12) {
        console.log("this month 31 Days.");
    }

    // Check for 30 Days
    else if (month == 4 || month == 6 ||
        month == 9 || month == 11) {
        console.log("this month has 30 Days.");
    }

    // Check for 28/29 Days
    else if (month == 2) {
        console.log("this month can have 28 or 29 Days.");
    }

    // Else Invalid Input
    else {
        console.log("Invalid Month.");
    }
}
getNumberOfDays(3);