
function giveGrade (grade) {
    if (grade >= 90 && grade <= 100)
           console.log('Grade is A');
       else if (grade >= 70 && grade <= 89)
           console.log('Grade is B');
       else if (grade >= 60 && grade <= 69)
           console.log('Grade is C');
       else if (grade >= 50 && grade <= 59)
           console.log('Grade is D');
       else if (grade >= 0 && grade <= 49)
           console.log('Grade is F');
       else
           console.log('invalid score');
   }
   giveGrade(98);

   function checkSeason(season) {

    if (season.toLowerCase() == "september" || season.toLowerCase() == "october" || season.toLowerCase() == "november")
        console.log('the season is Autumn');
    else if (season.toLowerCase() == "december" || season.toLowerCase() == "january" || season.toLowerCase() == "february")
        console.log('the season is Winter');
    else if (season.toLowerCase() == "march" || season.toLowerCase() == "april" || season.toLowerCase() == "may")
        console.log('the season is Spring');
    else if (season.toLowerCase() == "june" || season.toLowerCase() == "july" || season.toLowerCase() == "august")
        console.log('the season is Summer');
    else
        console.log('invalid month');
}

checkSeason('january');


