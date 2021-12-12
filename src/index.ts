// console.log('hello world');

import Job, { Person, Type2 } from './Interfaces';

// TYPES

const isOpen: boolean = false;

const firstName: string = "Jon";

const age: number = 30.5;

const list: number[] = [0,1,2,3];

const person: [string, number] = ['Jon', 30.5];  // tuple

const person2: [string, number, boolean] = ['Jon', 30.5, false];  // tuple

// enum Job { WebDev, WebDesigner, PM }  // enum (like a list)
const job: Job = Job.WebDesigner;


const phone: any = "iPhone 12 mini";
const laptop: any = 2;

// Never should be useful as a result of a function
// const tablet: never = 3; // doesnt make sense in this context


// Type of 'object', when the other types are not applicable


// Compiler
  // can use TypeScript inbuilt compiler (TSC)
  // or use Parcel plugin that uses TSC, as it has additional features
  //


  // FUNCTIONS

  const sayHello = () => {
    console.log('Hello');
  }

  sayHello();

// functions param is string and function returns a string
// optional param with ? i.e. word?: string
// const sayWord = (word?: string) : string => {
//   console.log(word || 'Hi');
//   return word || 'Hi';
// }

// default param, TypeScript infers the default param Type
// Rest params works as expected
const sayWord = (word = 'Hi', ...otherStuff: string[]) : string => {
  console.log(word);
  console.log(otherStuff);
  return word;
}

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

let newName3: string | number = "Jim";
newName3 = 10;
// newName = false;
let newName4 = newName3
// newName4 = 'Joe'; // won't work as it gets type from current value, which is a number


// UNION TYPES IN FUNCTIONS
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px;`;
}

makeMargin(10); // no error
makeMargin('10'); // no error


// NULL TYPES

let dog: string; // can be string or null or undefined
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


const sayName = (name: string, age: number): string => {
  console.log(name, age);
  return name;
}

sayName("Jane", 37);
// sayName(37, "Jane"); // wont work

// defining an interface like a schema
// interface Person {
//   name: string,
//   age: number
//   // address?: string // optional param with ?
// }

const sayName2 = ({ name, age }: Person): string => {
  console.log(name, age);
  return name;
}

sayName2({ name: "Jill", age: 37 });

const sayName3 = ({ name, age }: Person): Person => {
  console.log(name, age);
  return { name, age }; // return Person data type
}

sayName3({ name: "Jim", age: 37 });


// ENUMs
//  might have encounteres in graphQL
//  Enum is it's own type
// it allows us to define a set of named constants
//  a list of things  that are the only values
// usefule for select lists or categories of things
// TypeScript has numeric and string based Enums


// Numeric Enum
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz // 2
}

console.log(Type.Quiz); // prints the index

const createContent = (contentType: Type) => {
  return contentType;
}

createContent(Type.Video);
createContent(0); // index works

// String Enum
// enum Type2 {
//   Video = "VIDEO",
//   BlogPost = "BLOG_POST",
//   Quiz = "QUIZ"
// }

console.log(Type2.Quiz); // prints the string

const createContent2 = (contentType: Type2) => {
  return contentType;
}

createContent2(Type2.Video);
// createContent2("QUIZ"); // Not gonna work


// CLASSES

class Team {
  teamName: string; // public by default
  // public teamName: s tring;
  // private teamName: string;
  // readonly teamName: string; // prevents from being changed

  constructor(teamName) {
    this.teamName = teamName;

  }

  score(): string {
    this.teamName = "changing";
    console.log("gooooal");
    console.log(this.teamName);
    return 'goal';
  }
}

const redwings = new Team("Red Wings");

redwings.score();
console.log(redwings.teamName);
