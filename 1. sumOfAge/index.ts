interface User1 {
  name: string;
  age: number;
}

function sumOfAge(user1: User1, user2: User1) {
  return user1.age + user2.age;
}

const age = sumOfAge({ name: "Raja", age: 20 }, { name: "Rani", age: 30 });

console.log("Total age is :", age);
