

function getNumberOfDaysWithYear(month, year) {

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

    // Check leap year if month is 2
    else if (month == 2) {
        var isLeapYear = false;
        // If a year is multiple of 400 or multiple of 4, 
        // then it is a leap year 
        if (year % 400 == 0 || year % 4 == 0)
            isLeapYear = true;

        // Else If a year is multiple of 100, 
        // then it is not a leap year 
        if (year % 100 == 0)
            isLeapYear = true;

        if (isLeapYear) {

            console.log("this year is a leap year so month has 29 Days.");
        } else {
            console.log("this year is not a leap year so month has 28 Days.");
        }
    }

    // Else Invalid Input
    else {
        console.log("Invalid Month.");
    }
}

// getNumberOfDaysWithYear(2, 2000);
getNumberOfDaysWithYear(2, 2002);