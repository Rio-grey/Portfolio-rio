// rest parameters
const add = (...numbers) => {
  console.log("numbers", numbers);
};
add(1, 2, 3, 4, 5, 6);

const add2 = ({ a, b, ...other }) => {
  console.log("a", a); // a
  console.log("b", b); // b
  console.log("other", other); // { c : 3, d : 4 }
};
add2({ a: 1, b: 2, c: 3, d: 4 });
