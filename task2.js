 //Study synchronous and asynchronous programming: Callbacks, Promises, and async/await. Implement examples for each.
//Convert callback-based code to use Promises and async/await.

// Synchronous function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");


// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Alice", age: 25 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Data received:", data);
});


// Creating a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Alice", age: 25 };
            resolve(data);
        }, 2000);
    });
}

// Consuming a Promise
fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    // Using async/await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Alice", age: 25 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();






// //git config --global user.email "Enter you email ID here"
// //git config --global user.name "Enter your name here"


// git config --global user.email "Enter you email ID here"
// git config --global user.name "Enter your name here"
// git init
// git remote add origin <repositary-url>
// git add -A
// git commit -m "commit message"
// git commit -m "solution"
// git branch -M main
// git push -u origin main
