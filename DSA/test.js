const solution1 = require("./solution1.js");
const solution2 = require("./solution2.js");

// Test solution1
console.assert(solution1([10, 9, 2, 5, 3, 7, 101, 18]) === 4, "solution1 Test 1 Failed");
console.assert(solution1([]) === 0, "solution1 Test 2 Failed");
console.assert(solution1([1]) === 1, "solution1 Test 3 Failed");
console.assert(solution1([2, 2, 2, 2, 2]) === 1, "solution1 Test 4 Failed");
console.assert(solution1([3, 6, 3, 9, 8, 9]) === 4, "solution1 Test 5 Failed");

// Test solution2
console.assert(JSON.stringify(solution2([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]), "solution2 Test 1 Failed");
console.assert(JSON.stringify(solution2([3, 2, 4], 6)) === JSON.stringify([1, 2]), "solution2 Test 2 Failed");

console.log("All DSA Tests Passed!");