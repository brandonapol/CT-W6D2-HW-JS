// Problem One

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.values(person3)[i])}

// Problem Two

// ANSWER ATTEMPT ONE
function Person(name,age){
    this.name = name;
    this.age = age;
// MDN literally says 'do not use arrow functions with this or super or functions in methods' https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions thus I am unsure what to do about the directions here; I have done the entire problem thrice (ok, like 2 3/4 times) to cover my bases
    this.printInfo = ( function() {
        let new_age = this.age;
        console.log(this.name, new_age);
        return function() {return (new_age + 3)} // this does not quite work
    })
}

// ANSWER ATTEMPT TWO
function Individual(name,age){
  this.name = name;
  this.age = age;

  this.printInfo = function() {
    console.log(this.name, this.age)
  }
  this.newAge = function() {
    console.log(this.name, this.age + 3)
  }
}

// ANSWER ATTEMPT THREE
// function Dude(name, age){
//   this.name = name;
//   this.age = age;
// }

// function printInfo = (name, age) => (console.log(name, age))
// function addAge = (name, age) => (console.log(name, age + 3))
// I know it doesn't work I'm tired and don't understand which of my 3 solutions y'all want


let person_one = new Individual('can you make anyone truly new', 17)
let person_two = new Individual('Grandma', 86)

console.log(person_one.printInfo())
console.log(person_two.printInfo())
console.log(person_two.newAge())

// Problem Three
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLongString = (str) => {
    return new Promise( (resolve,reject) => {
        if(str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}


isLongString('Yabbadabbadoo')
.then( (result) => {
    console.log('Big Word')
})
.catch( (error) => {
    console.log('Small number')
})

isLongString('butt')
.then( (result) => {
    console.log('Big Word')
})
.catch( (error) => {
    console.log('Small number')
})