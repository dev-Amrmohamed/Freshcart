import React, { useState } from "react";

// Constant
const PI = 3.1415;

// Function
function add(a, b) {
  return a + b;
}

// React Component (Custom JSX Tag)
function MyComponent(props) {
  // Variable
  const [count, setCount] = useState(0);

  // Parameter: props.message
  const message = props.message;

  return (
    <div className="container">
      <h1>{message}</h1>
      <p>Count is: {count}</p>
      <button onClick={() => setCount(add(count, 1))}>Add 1</button>
      <CustomChildComponent myProp="Hello" anotherProp={PI} />
    </div>
  );
}

// Another React Component
function CustomChildComponent({ myProp, anotherProp }) {
  return (
    <section>
      <h2>{myProp}</h2>
      <span>Value: {anotherProp}</span>
    </section>
  );
}
const something = () => {
  console.log("mkldsfm");
};

function other() {
  console.log("hi");
}
const x = {
  mgf: omfg,
};
other;
something;
export default MyComponent;
