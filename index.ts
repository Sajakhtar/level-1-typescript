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
const tablet: never = 3; // doesnt make sense in this context


// Type of 'object', when the other types are not applicable


// Compiler
  // can use TypeScript inbuilt compiler (TSC)
  // or use Parcel plugin that uses TSC, as it has additional features
  //
