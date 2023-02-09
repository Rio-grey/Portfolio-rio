// destructuring obj
const person = {
  name: "John",
  age: 34,
  isMarried: true,
  address: {
    street: "Main Street",
  },
};
const {
  name,
  age,
  address: { street },
} = person;
// console.log(name, age, street);

function showInfo({ name, age, isMarried, address: { street } }) {
  console.log(`Name: ${name}, Age: ${age} and Street: ${street}`);
  console.log(`Tình trạng: ${isMarried ? "Đã kết hôn" : "Độc thân"}`);
}
showInfo(person);

function useState(initialState) {
  let state = initialState;
  function getState() {
    return state;
  }
  function setState(newState) {
    state = newState;
  }
  return [getState, setState];
}
// giá trị khởi tạo của count là 10
// setCount có nhiệm vụ thay đổi giá trị của count
const [count, setCount] = useState(10);
console.log(`Giá trị cũ là: `, count());
setCount(20);
console.log(`Giá trị mới là: `, count());
