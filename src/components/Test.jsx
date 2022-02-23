import React from "react";
import { makeStyles } from '@mui/styles';
import ChildTest from "./ChildTest";

const styleYay = makeStyles({
  root:{
    background : 'orange',
    color : 'white'
  }
})

export default function Test({name,caste,price}) {

  const classes = styleYay()
  const nom = 0
  if (nom >= 1) {
    return (
      <div>
        <h2>Hello {name}</h2>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <h2>Number is less than 1 {name}</h2>
    <h2>{caste}</h2>
    <h3>The car price would be ${price}</h3>
    <ChildTest name={name}/>
    </div>
  );
}
