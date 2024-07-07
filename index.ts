/* Q1.Create   a function that accepts two parameters:
It's perform 
 
1.Add
2.Sub
3.mul
4.div  */

//add funtion
function add(a: number, b: number) {
  return a + b;
}

console.log(add(3, 4));
// multiplay
let multiplay = function (num1: number, num2: number) {
  return num1 * num2;
};
console.log(multiplay(3, 4));
//divide
let divide = (num1: number, num2: number) => {
  return num1 / num2;
};
console.log(divide(20, 2));
//substract
function substract(a: number, b: number) {
  return a - b;
}
console.log(substract(10, 2));

/** Assignment 
 Q2.Cities: Write a function called describe_city() that accepts the name
  of a city and its country. The function should print a simple sentence,
   such as Karachi is in Pakistan. Give the parameter for the country a 
   default value. Call your function for three different cities, at least 
   one of which is not in the default country.
*/
let describe_city = (
  city1: string,
  city2: string,
  city3: string,
  country: string = "pakistan"
) => {
  return `${city1} , ${city2} and ${city3} are the famous cities of ${country} \n`;
};
console.log(describe_city("karachi", "lahore", "islamabad"));
/* Q3. Create   function that accepts two parameters: and a calculates  Rectangle Area                                                          In this function:
* width and height are the parameters of type number.
* The function returns the area, which is the product of width and height

 */

let areaOfRectangle = (width: number, height: number) => {
  return `the calculated area of Rectrangle is ${width * height}`;
};
console.log(areaOfRectangle(12, 4));
