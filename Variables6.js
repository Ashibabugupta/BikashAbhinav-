

function checkIfPrimeNumber(number) {

    let isNotPrime = false;

    // Since we know that 1 is neither prime nor composite number.
    if (number == 1) {
        console.log(" 1 is neither prime nor composite");
    } else if (number > 1) {
        // Iterate from 2 to number/2.
        for (let i = 2; i < number / 2; i++) {
            // Check if 'i' divides 'number' without
            // leaving the remainder
            if (number % i == 0) {
                // If yes, then set a flag to true
                // and exit from the loop.
                isNotPrime = true;
                break;
            }
        }
        // If the flag is found true, it means a divisor was found
        // during the iteration.
        if (isNotPrime == true) console.log(number + " is not a prime number");
        // Otherwise, no divisor was found.
        else console.log(number + " is a prime number");
    }
}

checkIfPrimeNumber(1);
checkIfPrimeNumber(8);

// question 24
function createArray() {

    const evenArr = [];
    const oddArr = [];

    for (n = 0; n <= 100; n++) {
        if (n % 2 == 0) {
            evenArr.push(n);
        } else {
            oddArr.push(n);
        }
    }

    console.log("Even array : " + evenArr);
    console.log("Odd array : " + oddArr);
}

createArray();
