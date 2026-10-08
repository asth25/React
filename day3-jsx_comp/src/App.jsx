import React from "react";
import About from "./About";

let App = () => {

  // let ui = React.createElement(
  //   "div", {},[
  //     React.createElement("h1",{}, "Hllowww"),
  //     React.createElement("h2",{}, "Byeeee"),
  //     React.createElement("h3",{}, "wapas ayo"), 
  //   ]
  // )
  return (
      <div>
    <h1>helooww</h1>
    <h2>byeeee</h2>
    {<About width="500" height="600">
      <h1>uiuiuiuiui</h1>
      </About>}
  </div>
  )
};
export default App;


