const myDisplay = (content) => {
  document.querySelector("#app").innerHTML = content;
};
const myCalculator = (a, b, callback) => {
  callback(a + b);
};
myCalculator(5, 5, myDisplay);

// truyền 1 hàm vào 1 hàm khác như một tham số

// Xử lý bất đồng bộ
function loadScript(src, callback) {
  const script = document.createElement("script"); // tạo ra thẻ <script>
  script.src = src; // <script src="https://github.com/"></script>
  script.onload = function () {
    callback(script);
  };
  script.onerror = function () {
    callback(new Error("load failed"));
  };
  document.head.append(script); // <head><script src="https://github.com/"></script></head>
}
loadScript("https://github.com/", function (script) {
  if (error) {
    console.log(error);
  } else {
    console.log("script loaded: ", script);
  }
});
