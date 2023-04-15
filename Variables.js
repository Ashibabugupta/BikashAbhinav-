// Question no-1
//Sting values.
let AccNo = "3251232136";
console.log(AccNo);
// // Boolean Values
var num1 = 7;
var num2 = 6;
var answer = num1>num2;
console.log(answer);
// // // undefined values
var bika = {};
console.log(bika); 
// // // null values
var bika = null;
console.log(bika);

// // Question no-2

var firstName = "Bikash";
console.log(firstName);
var lastname = "Gupta";
console.log(lastname);
var age = "40 Years";
console.log(age);
const Maritalstatus = "Married";
console.log(Maritalstatus);
const countryname = "India";
console.log(countryname);
// // //Template litral (Interpolation). 

console.log(`my current first name is ${firstName} ${lastname} ${age} ${Maritalstatus} ${countryname}`);
// // Question no-3 

const planetsName= ["mercury", "venus", "earth", "mars", "jupiter","saturn",]; 
const UpperplanetsName = [];
for (const badaletter of planetsName) {UpperplanetsName.push (badaletter.toUpperCase ());}
console.log(UpperplanetsName); 

console.log(planetsName);

// Question no-4
let PersonsName = ["Hari","Ravi","Nisha", "Govind","Dipak"];
console.log(PersonsName.includes("Govind" ,3)); 
// Question no-5

let name = 'BIKASHKUMAR';
let arry1 = name.split('');
console.log(arry1);

// Question no-6

let CompanyName = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let company = CompanyName.split(',')
console.log(company);
// Question no-7

const SkilledName = ["pw skilled", "cw skilled", "gw skilled", "aw skilled","pw skilled"];
console.log(SkilledName.indexOf ("pw skilled"));

// Question no-8

let banner = '  Nageswarrao  ';
let result = banner.trim('whitespace');
console.log(result);

// Question no-9

let X = 15;
let Y = 10;
let z = (X>Y);
console.log(z);

let Mango1 = 20;
let Mango2 = 30;
let Mango3 = (Mango1<Mango2);
console.log(Mango3);
let a = (100+20);
let b = (10+10);
let Z = (a>b);
console.log(Z);
let X1 = 25;
let Y1 = 30;
let Z1 = (X1>Y1);
console.log(Z1);
let apple1 = 40;
let apple2 = 30;
let apple3 = (apple1<Mango2);
console.log(apple3);
let Time1 = (25+20);
let Time2 = (30+10);
let Time3 = (Time1<Time2);
console.log(Time3);

// // // Question no-10

let check = -4 > 3;
console.log(check);
let check1 = -4 >= 3;
console.log(check1);
let check3 = -4 <= 3;
console.log(check3);
let check4 = -4 == 4;
console.log(check4);
let check5 = -4 === 4;
console.log(check5);
let check6 = -4 != 4;
console.log(check6);
let check7 = -4 !==4;
console.log(check7);
let check8 = -4 != '4';
console.log(check8);
let check9 = -4 !== '4';
console.log(check9);
let check10 = -4 === '4';
console.log(check10);
let Check = 4 > 3 && 10 > 5;
console.log(Check);

// Question no-11

const today = new Date();
const year = today.getFullYear();
console.log(year);
 const TodayMonth = new Date('Februry 15, 23 12:19:22');
 console.log(TodayMonth.getMonth());

 const TodayDate = new Date('Februry 15, 23 12:19:22');
 console.log(TodayDate.getDate());
 const TodayDay = new Date('Februry 15, 2023 12:19:40')
 const day1 = TodayDay.getDay();
 console.log(day1);
 const HoursNow = new Date('Februry 15, 2023 12:19:49');
 console.log(HoursNow.getHours());
 const MinutesNow = new Date('Februry 15, 2023 12:20:49');
 console.log(MinutesNow.getMinutes());
 const PastTime = Date.parse('01 Jan 1970 00 00 00 GMT');
 const persentTime = Date.parse('15 Feb 2023 13:29:20 GMT');
 console.log(persentTime);

let Number = n
if (Number % 2==0){
console.log("The Number is Even")
}
else{
    console.log(" The number is odd")
}
console.log(Number); 






