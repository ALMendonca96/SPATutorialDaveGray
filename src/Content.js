import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Obi-Wan", "Anakin", "Asoka"];
    const randomInt = Math.floor(Math.random() * 3);
    return names[randomInt];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2("Anderson")}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
