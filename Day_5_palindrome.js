//squares each number in the array
const myarray = [1,2,3,4,5];

console.log(myarray[0]);

function arraySquared(arr) {
    return (arr.map(function(item){
        return item ** 2
    }))
}

let squaredArray = arraySquared(myarray)

// ask the palindrome question

function isPalindrome(str) {
    const normalized = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}

