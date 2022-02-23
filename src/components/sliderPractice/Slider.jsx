import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { makeStyles } from "@mui/styles";

const dataLength = SliderData.length;

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "10px",
    padding: "10px",
  },
  buttonClick: {
    width: "70px",
    height: "30px",
    alignSelf: "center",
    border: "none",
    borderRadius: "25px",
    padding: "7px",
    backgroundColor: "skyblue",
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  imageContainer: {
    height: "350px",
    maxWidth: "auto",
    width: "100%",
    overflow: "hidden",
  },
  carouselImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

export default function Slider() {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const prevButton = () => {
    /* console.log("prev button"); */
    setCounter(counter === 0 ? dataLength - 1 : counter - 1);
    /* console.log(counter); */
  };

  const nextButton = () => {
    /* console.log("next button"); */
    setCounter(counter === dataLength - 1 ? 0 : counter + 1);
    /* console.log(counter); */
  };

  return (
    <div className={classes.root}>
      <button onClick={prevButton} className={classes.buttonClick}>
        Previous
      </button>
      {SliderData.map((data, index) => {
        if (index === counter) {
          return (
            <div className={classes.imageContainer} key={index}>
              <img className={classes.carouselImg}
                /* width="100%"
                height="100%" */
                src={data.aImage}
                alt={data.altName}
              />
            </div>
          );
        }

        return null;
      })}
      <button onClick={nextButton} className={classes.buttonClick}>
        Next
      </button>
    </div>
  );
}
