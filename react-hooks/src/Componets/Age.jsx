import React, { useState } from "react";

const Age = () => {
  //Using multiple useState hooks
  /*
  let [age, setAge] = useState(24);
  let [siblings, setSiblings] = useState(10);
  */
  let [state, setState] = useState({ age: 24, siblings: 10 });

  //Code used when we have multiple useState Hooks
  /*
  let onclick = () => {
    setAge(age + 1);
  };
  let siblingsHandler = () => {
    setSiblings(siblings + 1);
  };
  */

  //Code used when we have multiple useState Hooks
  /*
  return (
    <div>
      <h2>Today Iam {age} Years of age</h2>
      <h2>I have {siblings} Siblings</h2>
      <button onClick={onclick}>Increment age by one</button>
      <button onClick={siblingsHandler}>Increment age by one</button>
    </div>
  );
  */

  let onclick = (val) => {
    setState({
      ...state,
      [val]: state[val] + 1,
    });
  };

  const { age, siblings } = state;
  return (
    <div>
      <h2>Today Iam {age} Years of age</h2>
      <h2>I have {siblings} Siblings</h2>
      <button onClick={() => onclick("age")}>Increment age by one</button>
      <button onClick={() => onclick("siblings")}>Increment age by one</button>
    </div>
  );
};

export default Age;
