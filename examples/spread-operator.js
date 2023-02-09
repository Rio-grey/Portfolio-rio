const person = {
  name: "John",
  age: 34,
  isMarried: true,
  child: {
    name: "Kien",
  },
};
// shallow copy -> copy nông
// ====== Sử dụng spread operator để copy object
// const person2 = {
//   ...person,
//   address: "Hưng Yên",
// };
// console.log(person2);

// ====== Sử dụng Object.assign để copy object
// const person2 = Object.assign({ address: "Main street" }, person);
// console.log(person2);

// deep copy -> copy sâu
// const person2 = JSON.parse(JSON.stringify(person));
const person2 = structuredClone(person);

// Sử dụng deep copy để thay đổi giá trị B
person2.child.name = "Dat";
console.log("person 1", person);
console.log("person 2", person2);

// -------------------------------------------------------------------------------------------------------------------------
// arrays
const products = ["Product A", "Product B"];
const newProducts = [...products, "Product C"];
console.log("Products", products);
console.log("New products", newProducts);
