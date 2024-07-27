// // example 1:
// interface User4 {
//   readonly name: string;
//   readonly age: number;
// }

// const user: User4 = {
//   name: "Raja",
//   age: 20,
// };

// user.age = 30;

// console.log("Raja", user);

// example 2:
interface User4 {
  name: string;
  age: number;
}

const user: Readonly<User4> = {
  name: "Raja",
  age: 20,
};

console.log("Raja", user);
