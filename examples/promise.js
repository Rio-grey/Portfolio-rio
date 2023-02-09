const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script"); // tạo ra thẻ <script>
    script.src = src; // <script src="https://github.com/"></script>
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Failed to load"));
    document.head.append(script); // <head><script src="https://github.com/"></script></head>
  });
};
loadScript("https://github.com/")
  .then((script) => console.log(script))
  .catch((err) => console.log(err));
