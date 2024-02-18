import React from "react";
import ReactDOM from "react-dom";

// React Element => Object => HTML Element

const heading = React.createElement("h1", { id: "heading" }, "React Element");
// heading is a react element

// JSX code is transpiled to React.createElement by Parcel and parcel uses babel behind the scenes
const jsxHeading = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX
  </h1>
);


console.log(jsxHeading);
const number = 10;
// React Functional Components
// Component Composition
const HeadingComponent = () => (
  <div className="container">
   <h1> {number} </h1>
   <h1> {jsxHeading} </h1>
  <Title />
  {Title()}
<h1 className="heading">React Functional component</h1>
</div>
)

const Title = () =>  (
  <h1 className="heading" tabIndex="5">
    {jsxHeading}
    Namaste React using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
