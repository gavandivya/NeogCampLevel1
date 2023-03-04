//1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

const getMaxElement = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array));
// Output - 78

//2. Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (arr) => {
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i]
    }
    return sum1 / arr.length;

    const sum2 = arr.reduce((acc, currentValue) => acc + currentValue, 0,);
    return sum2 / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));
// Output -  3

//3. write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

const convertEvenToOdd = (arr) => {
    return arr.map((ele) => {
        return ele % 2 == 0 ? ele + 1 : ele;
    })

}
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
//Output -  [1, 3, 3, 5, 5, 7, 7, 9, 9]

//4. write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = (arr) => {
    return arr.filter((ele) => ele.length > 5)
}
var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]

//5. Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = (arr) => {
    return arr.map((ele) => ele.toUpperCase())
}
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// Output - ["EAT", "SLEEP", "CODE", "REPEAT"]

//6. Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (arr, para) => {
    let storeValue = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        storeValue.push(temp[para]);
    }

    return storeValue;

    //Solution using MAP
    // arr.map((ele) => ele[para])
}

console.log(
    getValues(
        [
            { name: "John", age: 21 },
            { name: "Mary", age: 22 },
            { name: "Peter", age: 23 },
        ],
        "name"
    )
); //Output -  ["John", "Mary", "Peter"]

//7. Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation = (obj) => {
    obj.teamid = 667543;
    return obj;
}
const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
//Output -  {firstName: 'John', lastName: 'Dee', teamId: 667543}

//8. Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = (obj) => {
    if (obj.team === undefined) {
        obj.team = 'A'
    }
    return obj;
}
console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// Output - {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// Output - {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// Output - {firstName: 'Priya', lastName: 'Raj', team: A}

//9. Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
    title: "JavaScript: The Definitive Guide",
    authors: [
        { name: "David Flanagan", age: 49 },
        { name: "Yukihiro Matsumoto", age: 57 },
    ],
    publisher: { name: "O'Reilly Media", location: "CA" },
};


const { title, authors: [{ name: author1 }, { name: author2 }], publisher: { name: publisherName } } = book;

console.log(title);
// Output -  JavaScript: The Definitive Guide
console.log(author1);
// Output - David Flanagan
console.log(author2);
// Output - Yukihiro Matsumoto
console.log(publisherName);
// Output - O'Reilly Media

//10. Write an ES6 function that takes an array of objects and returns the sum of all ages.
const person = [
    {
        name: "Divya",
        age: 23,
    },
    {
        name: "Disha",
        age: 18,
    },
    {
        name: "Raju",
        age: 54,
    },
    {
        name: "Rashmi",
        age: 49,
    },
];

const getAge = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    return sum;
}

console.log("Sum of Age - ", getAge(person));