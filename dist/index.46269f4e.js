"use strict";
// console.log('hello world');
// TYPES
const isOpen = false;
const firstName = "Jon";
const age = 30.5;
const list = [
    0,
    1,
    2,
    3
];
const person = [
    'Jon',
    30.5
]; // tuple
const person2 = [
    'Jon',
    30.5,
    false
]; // tuple
var Job1;
(function(Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job1 || (Job1 = {
})); // enum (like a list)
const job = Job1.WebDesigner;
const phone = "iPhone 12 mini";
const laptop = 2;
// Never should be useful as a result of a function
// const tablet: never = 3; // doesnt make sense in this context
// Type of 'object', when the other types are not applicable
// Compiler
// can use TypeScript inbuilt compiler (TSC)
// or use Parcel plugin that uses TSC, as it has additional features
//
// FUNCTIONS
const sayHello = ()=>{
    console.log('Hello');
};
sayHello();
// functions param is string and function returns a string
// optional param with ? i.e. word?: string
// const sayWord = (word?: string) : string => {
//   console.log(word || 'Hi');
//   return word || 'Hi';
// }
// default param, TypeScript infers the default param Type
// Rest params works as expected
const sayWord = (word = 'Hi', ...otherStuff)=>{
    console.log(word);
    console.log(otherStuff);
    return word;
};
sayWord('hey', 'wes');
sayWord();
// IMPLICIT TYPES
// however, best practice is to specify the type
let newName = 'Jim'; // Implied type is string, so you can't set to different type after
newName = 'Jack';
// newName = 10;
let newName2 = newName; // takes type from newName's initial declaration, as that's where type is implied
newName2 = 10; // so this won't work
// UNION TYPES
let newName3 = "Jim";
newName3 = 10;
newName = false;
let newName4 = newName3;
newName4 = 'Joe'; // won't work as it gets type from current value, which is a number
// UNION TYPES IN FUNCTIONS
const makeMargin = (x)=>{
    return `margin: ${x}px;`;
};
makeMargin(10); // no error
makeMargin('10'); // no error
// NULL TYPES
let dog; // can be string or null or undefined
dog = null;
// null and undefined are assignable to anything
dog = "lucy";
dog = 10;
dog = false;
dog = undefined; // if you don't want to allow null or undefined or both, you have to strict null check or strict undefined check via the config options

//# sourceMappingURL=index.46269f4e.js.map
