// console.log(React);

// let h1 = React.createElement("h1",{},"My first react code");
// console.log(h1);

// let realdom = document.querySelector("#root");
// let virtual = ReactDOM.createRoot(realdom).render(h1)

// console.log(virtual);

// import {a} from "./main.js";

// console.log(a);

// practice 

let rootelem = document.querySelector("#root");

let div = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    React.createElement("span", {}, "hey Im aastha"),
  ),
);

ReactDOM.createRoot(rootelem).render(div);
