import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Anderson"];
    const randomInt = Math.floor(Math.random() * 3);
    return names[randomInt];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Content;
