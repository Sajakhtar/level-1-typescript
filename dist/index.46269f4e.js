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
const tablet = 3; // doesnt make sense in this context
 // Type of 'object', when the other types are not applicable
 // Compiler
 // can use TypeScript inbuilt compiler (TSC)
 // or use Parcel plugin that uses TSC, as it has additional features
 //

//# sourceMappingURL=index.46269f4e.js.map
