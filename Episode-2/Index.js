import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h1", {}, "siblings"),
  ]),
React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "H1 child2"),
    React.createElement("h1", {}, "h1 sibling child2")
])]
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root1.render(parent);
