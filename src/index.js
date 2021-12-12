"use strict";
// console.log('hello world');
exports.__esModule = true;
var Interfaces_1 = require("./Interfaces");
// TYPES
var isOpen = false;
var firstName = "Jon";
var age = 30.5;
var list = [0, 1, 2, 3];
var person = ['Jon', 30.5]; // tuple
var person2 = ['Jon', 30.5, false]; // tuple
// enum Job { WebDev, WebDesigner, PM }  // enum (like a list)
var job = Interfaces_1["default"].WebDesigner;
var phone = "iPhone 12 mini";
var laptop = 2;
// Never should be useful as a result of a function
// const tablet: never = 3; // doesnt make sense in this context
// Type of 'object', when the other types are not applicable
// Compiler
// can use TypeScript inbuilt compiler (TSC)
// or use Parcel plugin that uses TSC, as it has additional features
//
// FUNCTIONS
var sayHello = function () {
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
var sayWord = function (word) {
    if (word === void 0) { word = 'Hi'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(word);
    console.log(otherStuff);
    return word;
};
sayWord('hey', 'wes');
sayWord();
// IMPLICIT TYPES
// however, best practice is to specify the type
var newName = 'Jim'; // Implied type is string, so you can't set to different type after
newName = 'Jack';
// newName = 10;
var newName2 = newName; // takes type from newName's initial declaration, as that's where type is implied
// newName2 = 10; // so this won't work
// UNION TYPES
var newName3 = "Jim";
newName3 = 10;
// newName = false;
var newName4 = newName3;
// newName4 = 'Joe'; // won't work as it gets type from current value, which is a number
// UNION TYPES IN FUNCTIONS
var makeMargin = function (x) {
    return "margin: ".concat(x, "px;");
};
makeMargin(10); // no error
makeMargin('10'); // no error
// NULL TYPES
var dog; // can be string or null or undefined
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
var sayName = function (name, age) {
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
var sayName2 = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
    return name;
};
sayName2({ name: "Jill", age: 37 });
var sayName3 = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
    return { name: name, age: age }; // return Person data type
};
sayName3({ name: "Jim", age: 37 });
// ENUMs
//  might have encounteres in graphQL
//  Enum is it's own type
// it allows us to define a set of named constants
//  a list of things  that are the only values
// usefule for select lists or categories of things
// TypeScript has numeric and string based Enums
// Numeric Enum
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz"; // 2
})(Type || (Type = {}));
console.log(Type.Quiz); // prints the index
var createContent = function (contentType) {
    return contentType;
};
createContent(Type.Video);
createContent(0); // index works
// String Enum
// enum Type2 {
//   Video = "VIDEO",
//   BlogPost = "BLOG_POST",
//   Quiz = "QUIZ"
// }
console.log(Interfaces_1.Type2.Quiz); // prints the string
var createContent2 = function (contentType) {
    return contentType;
};
createContent2(Interfaces_1.Type2.Video);
// createContent2("QUIZ"); // Not gonna work
// CLASSES
var Team = /** @class */ (function () {
    // public teamName: s tring;
    // private teamName: string;
    // readonly teamName: string; // prevents from being changed
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        this.teamName = "changing";
        console.log("gooooal");
        console.log(this.teamName);
        return 'goal';
    };
    return Team;
}());
var redwings = new Team("Red Wings");
redwings.score();
console.log(redwings.teamName);
