/**
 * # Functional Programming Set 2
**Instructions:**

1. Make use of .map(), .filter() and .find() methods.
2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed.
3. Do NOT use for-loops.
*/

//1. Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people = [
    { name: "Raj", age: 28 },
    { name: "Swapnil", age: 42 },
    { name: "Anushka", age: 35 },
];

const getNames = (arr) => arr.map((ele) => ele.name);
const names = getNames(people);
console.log(names);
// Output: ['Raj', 'Swapnil', 'Anushka']

//2. Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers = [1, 2, 3, 4];
const multiply = (num) => num.map((n) => n * 5);
const multiplyByFive = multiply(numbers);
console.log(multiplyByFive);
// Output: [5, 10, 15, 20]

//3. Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
    { name: "ram", dept: "marketer" },
    { name: "Radha", dept: "SDE" },
    { name: "shyam", dept: "finance professional" },
];

const greet = (arr) => arr.map((emp) => `Hi ${emp.name} we are glad to have you as a ${emp.dept}`)
const greetEmployeeMessages = greet(employeeData);
console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']

//4. Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
];

const getBookTitles = (arr) => arr.map((book) => book.title);
const titles = getBookTitles(books);
console.log(titles);
// Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']

//5. Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentName = [
    "Ram",
    "Anjali",
    "Arpit",
    "Bhanu Kumar",
    "Jaya",
    "Ankit",
    "shayam",
];

const studentNames = studentName.filter((ele) => ele.slice(0, 1) === 'A')

console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]

//6. Write an ES6 function which filters out the products which have a price greater than 40.

const productData = [
    { prodName: "Dairy Milk", price: 10 },
    { prodName: "Dairy Milk Silk", price: 70 },
    { prodName: "Five Star", price: 20 },
    { prodName: "Mars", price: 50 },
];

const getProducts = (arr, price) => arr.filter((ele) => ele.price > 40)

console.log(getProducts(productData, 40));
// Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]

//7. Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers1 = [1, 2, 3, 21, 14, 7];

const divisbleBy7 = (nums) => nums.find((num) => num % 7 == 0)

const isDivisibleBy7 = divisbleBy7(numbers1)

console.log(isDivisibleBy7);
// Output: 21

//8. Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

const names1 = [
    "Mohan",
    "Anjali",
    "Geetanjali",
    "Ankit",
    "Bhanu Kumar",
    "Ramakrishnan",
    "shayam",
];

const isNamesGreaterThan8 = (arr) => arr.find((ele) => ele.length > 8)

console.log(isNamesGreaterThan8(names1));
// Output: "Geetanjali"

//9. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
];

const findStudentWithGradeA = (arr) => arr.find((ele) => ele.grade === "A")

const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }

//10. Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. Return the first student object that has a grade of "A" or they are a scholarship student.

const students1 = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
];

const findStudent = (arr) => arr.find((ele) => ele.grade === "A" || ele.scholarship === true);

const student = findStudent(students1);
console.log(student);
// Output: { name: "Mary", grade: "B", scholarship: true }

//11. Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.

const students2 = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
];

const findStudent1 = (arr) => arr.find((ele) => ele.grade === "B" && ele.scholarship === true);

const student2 = findStudent1(students2);
console.log(student2);
// Output: { name: "Sarah", grade: "B", scholarship: true }

//12. Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. (Question Level: tough)

const bollywoodMovies = [
    { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
    {
        title: "Amar Akbar Anthony",
        director: "Manmohan Desai",
        year: 1977,
        rating: 7.6,
    },
    {
        title: "Namak Halaal",
        director: "Prakash Mehra",
        year: 1982,
        rating: 7.4,
    },
    {
        title: "Mr. India",
        director: "Shekhar Kapur",
        year: 1987,
        rating: 7.8,
    },
    {
        title: "Qayamat Se Qayamat Tak",
        director: "Mansoor Khan",
        year: 1988,
        rating: 7.6,
    },
    {
        title: "Parinda",
        director: "Vidhu Vinod Chopra",
        year: 1989,
        rating: 8.1,
    },
    { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];

const getBestOldBollywoodMovies = (arr) => arr.filter((ele) => ele.year < 1990 && ele.rating > 8.0).map((ele) => ele.title);
const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies);
// Output: ['Sholay', 'Parinda']
