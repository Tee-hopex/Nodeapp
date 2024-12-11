// require("dotenv").config() // this code allows us to import the "dotenv" module into this script
// // const {person, cars} = require("./module1") // This code allows use to import the module we created called module1... and access the object we created inside of it

// const cars = require("./module1").person

// let HiddenValue = process.env.HiddenValue //process.env.VariableName... this is how we access variables inside of our .env file.
// let age = process.env.AGE


// // console.log(person.How_Old()) //person.How_Old() this is a method to access the function inside the object we imported from our module1 module we created.
// console.log(cars)


// const path = require('path')

// console.log(path.basename(__dirname))



// const moment = require('moment');

// let date = moment().format("DD:MM:YYYY")

// let time = moment().format("hh:mm")


// console.log(moment().format("HH"))

// console.log(`Today's date is ${date}`)


// if ((moment().format("HH")) >= 12)  {
//     console.log(`The time is ${time} PM`)
// } else{
//     console.log(`The time is ${time} AM`)
// }


// console.log(`${Date.now()}`)


// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// let years = Math.round(Date.now() / year);

// console.log(years + 1970)



console.log(Math.round(3.0 + 3.4))