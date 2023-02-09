/**
 * 1. khai báo biến với var, let và const
 * 2. Cách tên biến: danh từ
 *
 */

var a = 1;
var a = 2;

let b = 1;
b = 2;

const c = 1; // number, string, boolean -> tham trị
const handsome = true;

const products = [1, 2, 3, 4]; // Tham chiếu
products.push(5);
console.log(products);

const person = {
  name: "rio",
};
person.age = 20;

// const productList = [];
const productItem = { id: 1, name: "Product A" };
const isMarried = true;
const isLogged = true;

const productList = ["Product A", "Product B"];
const productListEl = document.querySelector("#productList");

let result = "";
for (let i = 0; i < productList.length; i++) {
  result += "<div>" + productList[i] + "</div>";
}
productListEl.innerHTML = result;
