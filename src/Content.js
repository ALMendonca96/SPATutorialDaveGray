import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Han-Solo");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Obi-Wan", "Anakin", "Asoka"];
    const randomInt = Math.floor(Math.random() * 3);
    setName(names[randomInt]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleNameChange}>Chage name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click It</button>
    </main>
  );
};

export default Content;
