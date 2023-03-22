/**# Functional Programming Set 4

** Instructions:**

1. Make use of **.reduce() ** method in this set.
2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
3. Do NOT use for-loops.

### Questions**/

//1. Given an array, write an ES6 function that returns the total length of all the strings in an array.
const strings = ["apple", "banana", "cherry", "date", "blueberry"];

const totalLength = (arr) => {
    return arr.reduce((total, e) => {
        return total += e.length
    }, 0);
}

console.log(totalLength(strings));
// Output: 30

//2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
const numbers = [1, 2, 3, 4, 5];
const sumSquares = (arr) => arr.reduce((sum, ele) => sum += Math.pow(ele, 2), 0);
// const sumSquares = (arr) => arr.reduce((sum, ele) => sum += ele * ele, 0); way2

console.log(sumSquares(numbers));
// Output: 55

//3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.
const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 },
];

const totalValue = (arr) => arr.reduce((total, ele) => total += ele.price, 0);

console.log(totalValue(items));
// Output: 60

//4. Write an ES6 function that takes an array of strings as input and concatenates them into a single string.
const concatStrings = (arr) => arr.reduce((text, ele) => text += ele, "");
console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'

//5. Write an ES6 function to multiply and return all the elements of a given array.
const numbers1 = [1, 2, 3, 4, 5];
const product = (arr) => arr.reduce((multiply, ele) => multiply *= ele, 1);

console.log(product(numbers1));
// Output: 120

//6. Write an ES6 function that takes an array of strings and returns the longest string.
const strings1 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (arr) => arr.reduce((longest, ele) => {
    if (longest.length < ele.length) {
        longest = ele;
    }
    return longest;
}, strings1[0]);

console.log(longestString(strings1));

//way2
const longestString1 = (arr) => arr.reduce((longest, ele) => longest.length < ele.length ? longest = ele : longest, "");
console.log(longestString1(strings1));
// Output: 'Haule Haule'

//7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.
const people1 = [
    { name: "Jeena", age: 25 },
    { name: "Priya", age: 30 },
    { name: "Naina", age: 45 },
    { name: "Nainaeee", age: 4 },
];

const oldestPersonName = (arr) => {
    let maxAge = arr.reduce((max, person) => {
        return max.age > person.age ? max : person
    }, { age: 0 });
    return maxAge['name'];

}

console.log(oldestPersonName(people1));
// Output: 'Naina'

//8. Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
];

const getAverageAge = (arr) => arr.reduce((avg, ele) => {
    avg['averageAge'] += ele.age / arr.length;
    return avg;
}, { averageAge: 0 });

console.log(getAverageAge(people));
// Output: { averageAge: 32.5 }

//9. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.
const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Slipper", price: 40, quantity: 3 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
];

const findMostExpensiveProduct = (arr) => {
    return arr.reduce((max, product) => max.price > product.price ? max : product, { price: 0 });
}

console.log(findMostExpensiveProduct(products));
// { name: "Slipper", price: 40, quantity: 3 }

//10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.
const strings2 = ['divya', 'bruno', 'disha', 'rashmi', 'raju', 'bruno', 'raju', 'bruno', 'bruno', 'divya'];

const countName = (arr) => arr.reduce((count, ele) => {
    count[ele] ? count[ele]++ : count[ele] = 1;
    return count
}, {});

console.log(countName(strings2))
