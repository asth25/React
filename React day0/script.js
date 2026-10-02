// console.log(React);

let h1 = React.createElement("h1",{},"My first react code");
// console.log(h1);

let realdom = document.querySelector("#root");
let virtual = ReactDOM.createRoot(realdom).render(h1)

console.log(virtual);
