/**# Async JS Practice Set 1

**Instructions:**

1. Specific instructions have been written for each question present in this set.
2. Don’t use async-await in this set.
3. Please follow ES6 norms for writing your functions.
4. You can make use of some methods such as .length, toLowerCase(), toUpperCase() and .join() if needed.
5. An example has been provided for fetch call related questions for your understanding.**/

//1. Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedGreeting = () => {
  setTimeout(() => {
    console.log("Hello, welcome to my portfolio!");
  }, 2000)
}
delayedGreeting();
// Output - Hello, welcome to my portfolio!

//2. Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedAddition = (a, b) => {
  setTimeout(() => {
    console.log(a + b);
  }, 4000);
}
delayedAddition(2, 3);
// Output - 5

//3. Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

const delayedAlert = (message, delay) => {
  setTimeout(() => {
    alert(message);
  }, delay)
}
delayedAlert("Hello, world!", 2000);

//4. Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

const delayedLoop = (count) => {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      console.log("Hello" + i)
    }, i * 1000)
  }
}

//way2
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log('value is ', i);
    }, 3000);
  })(i);
}

delayedLoop(3);

//https://codehandbook.org/understanding-settimeout-inside-for-loop-in-javascript/

// should print Hello three times after 1 second each
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second

//5. Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

const falseFetch = (message, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!value) {
        reject({
          status: 404,
          message: message,
        });
      }
      else {
        resolve({
          status: 200,
          message: message,
        });
      }
    }, 2000);
  });
}

falseFetch("Message received", true)
  .then((response) => console.log(response.message))
  .catch((error) => {
    if (error.status == 400) {
      console.log(error.message);
    }
  });

// 6. EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)

//    Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};

// Your Code here (Solution Given)
const displayOutput = document.querySelector("#output");

fakeFetch("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 404) {
      displayOutput.textContent =
        "The data you are looking for, does not exist.";
    }
  });

// Output on the DOM should be:
// The data you are looking for, does not exist.

//    ### Explanation:
//    In the above code solution, we are making a fakeFetch function call with the URL _`https://example.com/api/itemlist`_.
//    If the Promise is resolved, the **`then`**method is executed with the successful response as the argument, and the console.log statement outputs the response object to the console.
//    If the Promise is rejected, the **`catch`**method is executed with the error object as the argument, and the `if`statement checks if the error status is equal to 404. If the error status is 404, the message "The data you are looking for, does not exist." is displayed in the HTML element with ID "output".

//7. Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch1 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/chat") {
        reject({
          status: 503,
          message: "Service Unavailable",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

fakeFetch1("https://example.com/api/chat")
  .then((response) => displayOutput.textContent = "Successful")
  .catch((error) => {
    if (error.status === 503 && error.message === "Service Unavailable") {
      displayOutput.textContent = "We are facing high demand at the moment. Please check back later in sometime."
    }
  })

// Output on the DOM should be:
// We are facing high demand at the moment. Please check back later in sometime.

//8. Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Bread", price: 30, quantity: 10 },
            { itemName: "Water Bottle", price: 50, quantity: 50 },
            { itemName: "Dairy Milk", price: 20, quantity: 30 }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

// Your Code here

// Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
//  1. Bread -- INR 30 -- 10
//  2. Water Bottle -- INR 50 -- 50
//  3. Dairy Milk -- INR 20 -- 30

//9. Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/data") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

fakeFetch3("https://example.com/api/data")
  .then((response) => displayOutput.textContent = response)
  .catch((error) => {
    if (error.status === 500) {
      displayOutput.textContent = "Internal Server Error! The server crashed. Please try again in some time";
    }
  })

// Output on the DOM should be:
// Internal Server Error! The server crashed. Please try again in some time.

//10. Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        reject({
          status: 401,
          message: "Unauthorized Access",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

fakeFetch4("https://example.com/api/profile")
  .then((response) => displayOutput.textContent = response)
  .catch((error) => {
    if (error.status === 401) {
      displayOutput.textContent = "Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.";
    }
  })
// Output on the DOM should be:
// Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.

//11. Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const falseFetchCall = (url, id) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile/NC002") {
        resolve({
          id: id,
          status: "Success"
        })
      }
      else {
        reject({
          status: "Failed"
        })
      }
    }, 2000);
  })

}

falseFetchCall("https://example.com/api/profile/NC002", 123).then((res) => displayOutput.textContent = `Welcome user with id ${res.id}`).catch((error) => displayOutput.textContent = error.status)