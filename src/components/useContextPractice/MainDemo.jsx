import React from "react";
import SubFile from "./SubFile";

export const RandomContext = React.createContext();

export default function MainDemo() {
  const randomData = [
    {
      name: "Aayush",
      age: 20,
    },
    {
      name: "Koharo",
      age: 13,
    },
    {
      name: "Koho",
      age: 11,
    },
    {
      name: "Koko",
      age: 22,
    },
  ];

  return (
    <>
      <RandomContext.Provider value={{ randomData }}>
        <h1>I am main file</h1>
        <SubFile />
      </RandomContext.Provider>
    </>
  );
}
