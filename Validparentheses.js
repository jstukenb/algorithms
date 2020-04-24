/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === null || s.length <= 0) {
        return true
    }
    var splitArray = s.split('');
    var pancake = [];
    for (var typeOfParentheses of splitArray) {
        if (typeOfParentheses === '[') {
            pancake.push(']');
        } else if (typeOfParentheses === '{') {
            pancake.push('}');
        } else if (typeOfParentheses === '(') {
            pancake.push(')');
        } else if (pancake.length === 0 || typeOfParentheses !== pancake.pop()) {
            return false;
        }
    }
    if (pancake.length === 0) {
        return true;
    }
};
/*
User judew on leetcode had a solution that I used to help understand the problem
I liked Marco's description of a pancake so I used that :P
*/