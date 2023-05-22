// 1.Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.
// Your Code here

// const delayedGreeting = () =>
//   setTimeout(() => console.log("Hello,welcome to my portfolio"), 2000);
// delayedGreeting();
// // Hello, welcome to my portfolio!

// 2.Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedAddition = (num1, num2) =>
//   setTimeout(() => console.log(num1 + num2), 4000);

// delayedAddition(2, 3);

// 3.Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedAlert = (msg, givenTime) =>
//   setTimeout(() => alert(msg), givenTime);

// delayedAlert("Hello World!!", 2000);

// 4.Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedLoop = (num) => {
//   setTimeout(() => {
//     for (var i = 0; i < num; i++) {
//       console.log("Hello");
//     }
//   }, num * 1000);
// };

// delayedLoop(3);

// 5.Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

// const fakeFetch = (msg, shouldSucceed) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldSucceed) {
//         resolve(`message from server: ${msg}`);
//       }
//       reject(`error from server: ${msg}`);
//     }, 3000);
//   });
// };

// fakeFetch("Its a secret message", false)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// const fakeFetch = (msg, shouldSucceed) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldSucceed) {
//         resolve(`message from server:${msg} `);
//       }
//       reject(`error from server:${msg} `);
//     }, 3000);
//   });
// };

// fakeFetch("Its a secret password cant share", false)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// 6.EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)

// Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/") {
//         reject({
//           status: 404,
//           message: "Items list not found"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: [
//               { itemName: "Bread", price: 30 },
//               { itemName: "Water Bottle", price: 50 },
//               { itemName: "Dairy Milk", price: 20 }
//             ]
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const displayOutput = document.querySelector("#output");

// fakeFetch("https://example.com/api/itemlist")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// 6.EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)

// Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         reject({
//           status: 404,
//           message: "Items list not found"
//         });
//       } else {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Bread", price: 30 },
//             { itemName: "Water Bottle", price: 50 },
//             { itemName: "Dairy Milk", price: 20 }
//           ]
//         });
//       }
//     }, 3000);
//   });
// };

// const displayOutput = document.querySelector("#output");

// fakeFetch("https://example.com/api/itemlist")
//   .then((data) => (displayOutput.textContent = "The data exist"))
//   .catch((error) => {
//     displayOutput.textContent = "The data does not exist";
//   });

// 7.Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/chat") {
//         reject({
//           status: 503,
//           message: "Service Unavailable"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 3000);
//   });
// };

// fakeFetch("https://example.com/api")
//   .then((data) => console.log(data.data.message))
//   .catch((error) => console.log(error.message));

// 8.Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { itemName: "Bread", price: 30, quantity: 10 },
//             { itemName: "Water Bottle", price: 50, quantity: 50 },
//             { itemName: "Dairy Milk", price: 20, quantity: 30 }
//           ]
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Items list not found"
//         });
//       }
//     }, 3000);
//   });
// };

// const displayOutput = document.getElementById("output");

// fakeFetch("https://example.com/api/itemlist")
//   .then((data) => {
//     console.log(data);
//     data.data.map(
//       (item) =>
//         (displayOutput.innerHTML += `<li>${item.itemName} -- INR ${item.price} -- ${item.quantity}</li>`)
//     );
//   })
//   .catch((error) => console.error(error));

// 9.Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/data") {
//         reject({
//           status: 500,
//           message: "Internal Server Error"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// // const displayOutput = document.getElementById("output");

// fakeFetch("https://example.com/api/data")
//   .then((data) => console.log(data.data.message))
//   .catch(
//     (error) =>
//       (displayOutput.textContent = `Internal Server Error! The server crashed. Please try again in some time`)
//   );

// 10.Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (URL) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (URL === "https://example.com/api/profile") {
//         reject({
//           status: 401,
//           message: "Unathorized Access"
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         });
//       }
//     }, 2000);
//   });
// };

// const displayOutput = document.getElementById("output");

// fakeFetch("https://example.com/api/")
//   .then((data) => (displayOutput.textContent = data.data.message))
//   .catch(
//     (error) =>
//       (displayOutput.textContent = `Unauthorized Access! Looks like you are not logged in. Please login to see your profile data.
//   `)
//   );

// 11.Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile/NC002") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
          }
        });
      } else {
        reject({
          status: 404,
          message: "Resource not found"
        });
      }
    }, 2000);
  });
};

fakeFetch("https://example.com/api/profile/NC002")
  .then((data) =>
    console.log(
      `Welcome!, ${data.data.data.name} from ${data.data.data.institute}`
    )
  )
  .catch((error) => console.error(error.message));
