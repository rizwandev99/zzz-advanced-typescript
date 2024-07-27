interface User2 {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}
type updateProps = Pick<User2, "name" | "age" | "email">;

function updateUser(updateProps: updateProps) {
  // do something
}
