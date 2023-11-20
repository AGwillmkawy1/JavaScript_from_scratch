// palindrome function - is function which may have sequence of numbers, or strings that's spelled the same way in both forward and back ignoring punctuation, case and spaces. 

function palindrome(str){
    let reg = /[\W_]/g;
    let smallLetter = str.toLowerCase().replace(reg, "");
    let reversed = smallLetter.split("").reverse().join("");
    if (reversed === smallLetter){
        return true;
    } else{
        return false;
    }

}
console.log(palindrome('123454321'))



// function which checks if a number is prime number or not

function is_prime(number) {
    if (number < 2){
      return false;
    }
    for (let i = 2; i<= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
}

let num = 7;
console.log(is_prime(num))











