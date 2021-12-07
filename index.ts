// console.log('hello world');


// TYPES

const isOpen: boolean = false;

const firstName: string = "Jon";

const age: number = 30.5;

const list: number[] = [0,1,2,3];

const person: [string, number] = ['Jon', 30.5];  // tuple

const person2: [string, number, boolean] = ['Jon', 30.5, false];  // tuple

enum Job { WebDev, WebDesigner, PM }  // enum (like a list)
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
