module.exports = function toReadable (number) {
  
  const first_19th = ["", "one", "two", "three", "four", "five",
                        "six", "seven", "eight", "nine", "ten", "eleven",
                        "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
                         "eighteen", "nineteen"];
   const  tensWords = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let first = null;
  let second = null;
  let secondTill19 = null;
  let third = null;
  result = "";

  if (number === 0) {
    return "zero";
  }
//filtr
  if (number < 20 || (number > 100 && (number%100 < 20) && number%100 !== 0)) {
    secondTill19 = number;
    if (Math.floor(number/100)>0) {
        first = Math.floor(number/100);
    }
    if (first > 0) {
        return first_19th[first] + " hundred " + first_19th[number%100];
    }
    else return first_19th[number];

  } else if (number%10 === 0 && number < 100) {
    second = number/10;
    return tensWords[second];

  } else if (number%100 === 0 && number >= 100) {
    first = Math.floor(number/100);
    return first_19th[first] + " hundred";

  } else {
    first = (Math.floor(number/100) > 0) ? Math.floor(number/100) : 0;
    second = (Math.floor(number/10%10) > 1 ) ? Math.floor(number/10%10) : 0;
    third = (Math.floor(number%10)) > 0 ? Math.floor(number%10) : 0;
    if (first > 0) {
        result = first_19th[first] + " hundred ";
    }
    if (second > 1) {
        result  = result + tensWords[second] + " " + first_19th[third] ;
    }
    else {
        result = result + first_19th[third] 
    }
    return result.trim();
  };  
}
