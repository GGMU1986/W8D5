// function sum() {
//     let sum = 0;
//     // debugger
//     let args = Array.prototype.slice.call(arguments);
//     args.forEach(arg => sum += arg);
//     return sum;
// }

function sum(...args) {
    let sum = 0;
    args.forEach(arg => sum += arg);
    return sum
}

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

Function.prototype.myBind = function() {
    // debugger
    const args = Array.from(arguments); //[pavlov]
    const context = args[0];
    const rest = args.slice(1); //[]
    
    const that = this;
    return function() { //[meow, a tree]
        // debugger
        // let args2 = rest;
        // args2 ||= Array.from(arguments) //note [] is truthy value
        const args2 = Array.from(arguments);
        return that.apply(context, rest.concat(args2));
    }

}
// 1. markov.says.myBind(pavlov, "meow", "Kush")();
// 2. markov.says.myBind(pavlov)("meow", "a tree");

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true