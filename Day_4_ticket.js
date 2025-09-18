let age = 20;

let isStudent = true;

function checkEligibility(age, isStudent){
    if (age < 18 || isStudent){
        return "Discount granted"
    } else {
        return "Regular ticket only"
    }
}

//not a part of the movie-ticket assignment

function toCurrency(num){
    return ("$" + num.toFixed(2))
}