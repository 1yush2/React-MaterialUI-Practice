import React, { useContext } from "react";
import { RandomContext } from "./MainDemo";

export default function SubFile() {
  const { randomData } = useContext(RandomContext);
  return (
    <div>
      {randomData.map((person) => {
        console.log(person);
        return (
          <div>
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
          </div>
        );
      })}
    </div>
  );
}
