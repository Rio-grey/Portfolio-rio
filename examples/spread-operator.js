const person = {
  name: "John",
  age: 30,
  isMarried: true,
};
const person2 = {
  ...person,
  address: "Main Street",
};
console.log(person2);

const products = ["Product A", "Product B"];
// products.push("Product C");
const newProducts = [...products, "Product C"];
console.log("products", products);
console.log("newProducts", newProducts);

// rest parameter

const add = (...numbers) => {
  console.log("numbers", numbers);
};
add(1, 2, 3, 4, 5, 6);
