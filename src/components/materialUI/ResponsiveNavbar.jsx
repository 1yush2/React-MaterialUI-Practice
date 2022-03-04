import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

// const useStyles = makeStyles((theme) => {
//   console.log("themetheme", theme);
//   return {
//     root: {
//       color: theme.palette.primary.second,
//     },
//   };
// });

const NavData = ["Home", "About us", "Contact Us", "Services"];

export default function ResponsiveNavbar() {
  // const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Aayush Logo</Typography>
          <Box component="navigation" sx={{ display: "flex", marginLeft: "auto"}}>
            {NavData.map((navv) => {
              return (
                <Typography key={navv} sx={{ mx: 2, my: 1 }}>
                  {navv}
                </Typography>
              );
            })}
            <Button variant="outlined">Log In</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
