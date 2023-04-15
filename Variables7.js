

function createBMI(height, weight) {


    // calculate bmi
    let bmi = weight / (height * height);
    console.log("The BMI is " + bmi);


    if (bmi < 18.5)
        console.log("underweight");

    else if (bmi >= 18.5 && bmi < 24.9)
        console.log("normal");

    else if (bmi >= 25 && bmi < 29.9)
        console.log("overweight");

    else if (bmi >= 30)
        console.log("obese");
}

createBMI(1.7272, 89)

function isPrime(n) {
    // since 0 and 1 is not prime return false.
    if (n == 1 || n == 0) return false;

    // Run a loop from 2 to n-1
    for (var i = 2; i < n; i++) {

        // if the number is divisible by i, then n is not a prime number.
        if (n % i == 0) return false;
    }
    // otherwise, n is prime number.
    return true;
}


function printPrimeNumbers() {
    for (i = 0; i <= 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

printPrimeNumbers()
