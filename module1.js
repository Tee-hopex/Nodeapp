const person = {
    firstName : "Bunni", 
    lastName : "Ujor",
    age: 23,
    How_Old: function () {
        return(`${this.firstName} is ${this.age}years old`)
    }
}

const cars = {
    brand : "Toyota",
    model: "lexus"
}



module.exports = {person, cars}    // This is how you export the object variable as a module, making it accessible when imported in other files