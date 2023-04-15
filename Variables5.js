
function checkifCountryExists(country) {
    const countries = ['INDIA', 'usa', 'UK', 'NEPAL', 'PAKISTAN'];

    if (countries.indexOf(country) > 0) {
        console.log(country.toUpperCase())
    } else {
        countries.push(country);
        console.log(countries);
    } 
  
}
checkifCountryExists("usa");

function addCountryName() {
    const countris =["INDIA","USSA", "JAPAN","RUSSIA"];
    if (countris.indexOf("ETHIOPIA")) {
        countris.unshift("ETHIOPIA");
    }
    console.log(countris);
}
addCountryName();

function arrayOperatoin() {
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    const len = ages.length;
    ages.sort();
    console.log("Min value :" + ages[0]);
    console.log("Max value :" + ages[ages.length - 1]);

    //find median age
    if (len % 2 != 0) {
        //one middle item
        console.log("The median age : " + ages[len / 2]);
    }

    //two middle items divided by two
    console.log("The median age : " + ages[(Math.floor((len - 1) / 2))] + ages[len / 2]) / 2;

    //Find the average age
    var totalAge = 0;
    for (var i = 0; i < len; i++) {
        totalAge += ages[i];
    }
    console.log("The average age : " + totalAge / len);

}

arrayOperatoin();
