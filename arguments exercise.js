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

// Function.prototype.myBind = function() {
//     // debugger
//     const args = Array.from(arguments); //[pavlov]
//     const context = args[0];
//     const rest = args.slice(1); //[]
    
//     const that = this;
//     return function() { //[meow, a tree]
//         // debugger
//         // let args2 = rest;
//         // args2 ||= Array.from(arguments) //note [] is truthy value
//         const args2 = Array.from(arguments);
//         return that.apply(context, rest.concat(args2));
//     }

// }

Function.prototype.myBind = function (...args) {
    const context = args[0];
    const rest = args.slice(1); //[]

    const that = this;
    return function (...args2) { //[meow, a tree]
        return that.apply(context, rest.concat(args2));
    }

}

// 1. markov.says.myBind(pavlov, "meow", "Kush")();
// 2. markov.says.myBind(pavlov)("meow", "a tree");

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
    debugger
    let numbers = [];

    function _curriedSum(num) {
        numbers.push(num)
        if (numbers.length === numArgs) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

// const total = curriedSum(4);
// console.log(total(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
    let args = [];
    let that = this;

    function _curriedFunc(arg) {
        args.push(arg);
        console.log(args)
        if (args.length === numArgs) {
            return that(args);
        } else {
            return _curriedFunc;
        }
    }
    return _curriedFunc;
}

function sum(arr) {
    let sum = 0;
    arr.forEach(el => sum += el);
    return sum;
}

function sentence(arr) {
    return arr.join(' ');
}

const calculator = sum.curry(3);
// const first = calculator(1)(2);
// console.log(first);
// // console.log(first(3));
// console.log(calculator(1));
// console.log(calculator(2));
// console.log(calculator(3));

const builder = sentence.curry(4);

console.log(builder('Hi'));
console.log(builder('how'));
console.log(builder('are'));
console.log(builder('you?'));
