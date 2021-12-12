// INTERFACE

export interface Person {
  name: string,
  age: number
  // address?: string // optional param with ?
}

enum Job { WebDev, WebDesigner, PM }
export default Job;

export enum Type2 {
  Video = "VIDEO",
  BlogPost = "BLOG_POST",
  Quiz = "QUIZ"
}
