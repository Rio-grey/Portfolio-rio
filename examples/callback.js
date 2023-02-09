const myDisplay = (content) => {
  document.querySelector("#app").innerHTML = content;
};
const myCalculator = (a, b, callback) => {
  callback(a + b);
};
myCalculator(5, 5, myDisplay);

// truyền 1 hàm vào 1 hàm khác như một tham số
