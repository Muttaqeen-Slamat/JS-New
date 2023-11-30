let numbers = [4, 8, 2, 8, 4, 7]

//purpose of an object is store all related data in a variable

// let firstName = 'Peter'
// let lastName = 'Lerato'

// const person = {
//     firstName,
//     lastName
// }

// console.log(person);


//destructuring
//retrieveing specific property or value

// let data = ['Muttaqeen', 'Slamat']
// let [firstName, lastName] = data

// console.log(firstName);
// console.log(lastName);
// console.log(`My name is ${firstName} and surname is ${lastName}`);

//junior lvl

// let firstName = data[0]
// let lastName = data[1]

//array of object
let products = [
    {
        id: 1,
        name: 'table',
        amount: 700
    },
    {
        id: 2,
        name: 'mobile',
        amount: 10000
    }
]
//[]because of array
let [product1, product2] = products

console.log(product1);
console.log(product2);

let person = {
    firstName: 'Muttaqeen',
    lastName: 'Slamat',
    age: 21
}

//{}because of object property
const {firstName, lastName, age} = person
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old`);
//or but long way
console.log(`My name is ${person.firstName} ${person.lastName} and I am ${person.age} years old`);



let [first, second, ...remaining] = [23, 5, 9, 11, 24, 32]

console.log(first, second, remaining);


// Exception handling using try .. and catch
//try, catch, finally, throw

//try statement defines a code block to run (to try)
//catch statement defines a code block to handle an error to the user
//finally statement defines a code block to run regardless of the results
//throw statement defines a custom error
//not to crash but a message to say why it did
//e.message will show the error


function division(fOp) {
    try{
        let result = fOp / sOp
        console.log(result);
    }catch(e) {
        console.log("Please try again next time", e.message);
    }
}
division(4)


/*
When to use an exception handling:
- Retrieving a value from an input element
- Handling arguments
- Accessing a file
- Accessing data from a table (in a database)
- Etc..
*/

// Make use of throw
function addition(...args) {
    let totalOfNumbs = 0 
    args.forEach( item=> {
        if(typeof item != 'number') 
            throw new Error(`${item} is not a number`)
        else totalOfNumbs += item
    })
    return totalOfNumbs
}
try{
    console.log(addition(4, 8, 'Joel', 9));
}catch(e) {
    console.log(e.message);
}

// Getter and setter


/* Local storage
- .getItem(key)
- .setItem(key, value : string)
- .removeItem(key): Remove the key
- .clear(): Remove all the keys
*/

// Explain promise
// let myPromise = new Promise((resolve, reject)=> {
//     let numb1 = 12
//     let numb2 = 2
//     // For division
//     if(numb2 > 0 ) 
//         resolve(`Result is: ${numb1 / numb2}`) 
//     reject(`You can't divide ${numb1} by ${numb2}`)
// })

// myPromise.then(
//     (correct)=>{
//         console.log(correct);
//     },
//     (denied)=> {
//         console.log(denied);
//     }
// )

// Fetch API
let cardContainer = document.querySelector('[data-cards]') 
fetch('https://randomuser.me/api?results=50')
.then(data=> data.json())
.then(result=> {
    let {results} = result 
    results.forEach( people =>{
        console.log(people);
        cardContainer.innerHTML += 
        `
        <div class="card" style="width: 18rem;">
            <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
            <div class="card-body">
            <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
            <p class="card-text">Age: ${people.registered.age}</p>
        </div>
        `
    })
})

// Asynchronous function 
// async function getData() {
//     let data = await fetch('https://randomuser.me/api?results=50')
//     return data.json()
// }
// async function display() {
//     let cardContainer = document.querySelector('[data-cards]') 
//     cardContainer.innerHTML = ''
//     let {results} = await getData()
//     results.forEach( people => {
//         cardContainer.innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// }
// display()

// Host JSON file to GitHub


// On Thursday, students need to start working on the Todo List





let myPromise = new Promise ( args ) 
function args(resolve, reject){
    let numb1 = +prompt("Enter only a number")
    if(typeof numb1 == 'number')
    resolve(`The entered number is ${numb1}`)
reject(`Unfortunately ${numb1} is not a number`)
}

myPromise.then(
    completed => console.log(completed),
    rejected => console.log(rejected)
)

// myPromise.then(
//     completed => console.log(completed),
// ).catch(
// rejected => console.log(rejected)
// )

//or

// myPromise.then(
//     (completed)=>{
//         console.log(completed);
//     }
// )