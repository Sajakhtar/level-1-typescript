"use strict";
// console.log('hello world');
// TYPES
const isOpen = false;
const firstName = "Jon";
const age1 = 30.5;
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
// newName2 = 10; // so this won't work
// UNION TYPES
let newName3 = "Jim";
newName3 = 10;
// newName = false;
let newName4 = newName3;
// newName4 = 'Joe'; // won't work as it gets type from current value, which is a number
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
// dog = 10;
// dog = false;
dog = undefined;
// if you don't want to allow null or undefined or both, you have to strict null check or strict undefined check via the config options
// INTERFACE
// allows for type checking data of a certain shape, through named paramters
// if you know GraphQL, this may seem similiar to defining types for queries
// Interfaces make code reliable and type safe
const sayName = (name, age)=>{
    console.log(name, age);
    return name;
};
sayName("Jane", 37);
// sayName(37, "Jane"); // wont work
// defining an interface like a schema
// interface Person {
//   name: string,
//   age: number
//   // address?: string // optional param with ?
// }
const sayName2 = ({ name , age  })=>{
    console.log(name, age);
    return name;
};
sayName2({
    name: "Jill",
    age: 37
});
const sayName3 = ({ name , age  })=>{
    console.log(name, age);
    return {
        name,
        age
    }; // return Person data type
};
sayName3({
    name: "Jim",
    age: 37
});
// ENUMs
//  might have encounteres in graphQL
//  Enum is it's own type
// it allows us to define a set of named constants
//  a list of things  that are the only values
// usefule for select lists or categories of things
// TypeScript has numeric and string based Enums
// Numeric Enum
var Type1;
(function(Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz"; // 2
})(Type1 || (Type1 = {
}));
console.log(Type1.Quiz); // prints the index
const createContent = (contentType)=>{
    return contentType;
};
createContent(Type1.Video);
createContent(0); // index works
// String Enum
var Type21;
(function(Type2) {
    Type2["Video"] = "VIDEO";
    Type2["BlogPost"] = "BLOG_POST";
    Type2["Quiz"] = "QUIZ";
})(Type21 || (Type21 = {
}));
console.log(Type21.Quiz); // prints the string
const createContent2 = (contentType)=>{
    return contentType;
};
createContent2(Type21.Video);
createContent2("QUIZ"); // Not gonna work
// CLASSES
class Team {
    // public teamName: s tring;
    // private teamName: string;
    // readonly teamName: string; // prevents from being changed
    constructor(teamName){
        this.teamName = teamName;
    }
    score() {
        this.teamName = "changing";
        console.log("gooooal");
        console.log(this.teamName);
        return 'goal';
    }
}
const redwings = new Team("Red Wings");
redwings.score();
console.log(redwings.teamName);

//# sourceMappingURL=index.46269f4e.js.map
