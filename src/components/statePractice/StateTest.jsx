import React, { useState } from "react";
import { stateDataPractice } from "./stateDataPratice";

export default function StateTest() {
  const newData = stateDataPractice;

  const [person, setPerson] = useState("");

  //     const mappedValue = newData.map((filData) => {
  //       return filData.value;
  //     });

  //     console.log(mappedValue);

  //   const newFilteredData = mappedValue.filter((aData) => {
  //         return aData;
  //     })
  //     console.log(...newFilteredData)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleClick = () => {
    if (person) {
      console.log("clicked");
    }else{
        console.log("no data");
    }
  };

  return (
    <div>
      {newData.map((someData, index) => {
        const { name, type, label, id } = someData;
        return (
          <div key={index}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              name={name}
              value={person.name}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <button type="submit" onClick={handleClick}>
        Add person
      </button>
    </div>
  );
}
