interface User3 {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}
type updateProps3 = Pick<User3, "name" | "age" | "email">;

type updatePropsPartial = Partial<updateProps3>;

function updateUser3(updateProps: updatePropsPartial) {
  // do something
}
updateUser3({ age: "33" });
