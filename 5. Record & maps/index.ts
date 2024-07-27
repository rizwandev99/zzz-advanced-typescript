interface User5 {
  [key: string]: number;
}
// const record = Record<string,number>
// above is incorrect way.

const users: Record<string, number> = {
  n1: 20,
  n2: 30,
};
