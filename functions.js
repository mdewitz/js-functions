/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(number) {
	return number.toString();
	 }

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase (number){
	return number+1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease (number) {
	return number-1;
}
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){ 
	return (x, x+y);
}
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract (x,y){
	return (x, x-y);
}
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply (x,y){
	return (x, x*y);
}
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y){
	return (x, x/y);
}
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square (x){
	return (x, x*x);
}
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate (operation, x, y) {
	var answer;
	var string; 
	switch (operation){
		case 'add': 
			answer = x + y;
			string = x + ' + ' + y + ' = ' + answer;
			break; 
		case 'subtract': 
			answer = x - y;
			string = x + ' - ' + y + ' = ' + answer;
			break;
		case 'multiply': 
			answer = x * y;
			string = x + ' * ' + y + ' = ' + answer;
			break;
		case 'divide': 
			answer = x / y;
			string = x + ' / ' + y + ' = ' + answer;
			break;
	}
	console.log(string);

	return answer;
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan (a, b) {
	if (a > b) {
		return true ; 
	}else {
		return false ;
	}
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan (a, b) {
	if (a < b) {
		return true ; 
	}else {
		return false ;
	}
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual (a, b) {
	if (a===b) {
		return true;
	} else {
		return false ;
	}
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum (x,y) {
	if (x>y) {
		return y;
	} else {
		return x;
	}
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum (x,y){
	if (x>y){
		return x;
	} else {
		return y;
	}
}
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven (n){
	if (n%2 === 0) {
		return true;
	} else {
		return false;
	}
}
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd (n){
	var i = 2;
	if (i%2){
		return false;
	} else {
		return true;
	}  
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade (score, total){
  if ((score/total)<=1.0 && (score/total)>=0.9) {
      return "A";
    } else if ((score/total)<=0.89 && (score/total)>0.8) {
      return "B";
    } else if ((score/total)<=0.79 && (score/total)>=0.7) {
      return "C";
    } else if ((score/total)<=0.699 && (score/total)>=0.6) {
      return "D";
    } else if ((score/total)<=0.59 && (score/total)>=0) {
      return "F";  
    }
  }

/**
 * Checks if a `restaurant` object has are `views` field.
 * If it does, increase it by 1. If it does not,
 * set itsreviews` field to 1.
 * @param {object} restaurant represents a restaurant
 */

function incrementReviews(restaurant) {
 if (!restaurant || (typeof restaurant !== 'object')) {
 return;
  }
 if(restaurant.hasOwnProperty("reviews")){
  restaurant.reviews++;
 } else{
  restaurant.reviews =1;
 }
  return restaurant;
}

/**
* Joins two strings with a space.
* @param {string} word1
* @param {string} word2
* @return {string} joined the words joined with a space
*/

function combine(word1, word2) {
return String(word1) + " " + String(word2);
}

/**
* Returns a circle object with the properties `circumference` and `area`.
* Use Math.PI for the value π.
* (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
* @param {number} radius
* @return {object} circle
*/
function createCircle(radius)