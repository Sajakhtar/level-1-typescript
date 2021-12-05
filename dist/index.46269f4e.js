// console.log('hello world');
// TYPES
var isOpen = false;
var firstName = "Jon";
var age = 30.5;
var list = [
    0,
    1,
    2,
    3
];
var person = [
    'Jon',
    30.5
]; // tuple
var person2 = [
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
var job = Job1.WebDesigner;
var phone = "iPhone 12 mini";
var laptop = 2;
// Never should be useful as a result of a function
var tablet = 3; // doesnt make sense in this context
 // Type of 'object', when the other types are not applicable
 // Compiler
 // can use TypeScript inbuilt compiler (TSC)
 // or use Parcel plugin that uses TSC, as it has additional features
 //

//# sourceMappingURL=index.46269f4e.js.map
