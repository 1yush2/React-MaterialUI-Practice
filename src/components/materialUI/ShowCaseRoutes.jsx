import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardClone from "./Dashboard/DashboardClone";
import Checkout from "./multiStepForm/Checkout";
import MaterialAlbumClone from "./MaterialAlbumClone";
import MaterialPictureSignIn from "./MaterialPictureSignIn";
import MaterialSimpleSIgn from "./materialSimpleSIgn";
import MaterialPricingClone from "./MaterialPricingClone";
import ResponsiveNavbar from "./ResponsiveNavbar";
import ShowCase from "./ShowCase";
import { Box, Typography } from "@mui/material";

const routesData = [
  {
    link: "/",
    component: <ShowCase />,
  },
  {
    link: "/Dashboard",
    component: <DashboardClone />,
  },
  {
    link: "/MultiStepForm",
    component: <Checkout />,
  },
  {
    link: "/Album",
    component: <MaterialAlbumClone />,
  },
  {
    link: "/PictureSignIn",
    component: <MaterialPictureSignIn />,
  },
  {
    link: "/SignIn",
    component: <MaterialSimpleSIgn />,
  },
  {
    link: "/Pricing",
    component: <MaterialPricingClone />,
  },
  {
    link: "/ResponsiveNav",
    component: <ResponsiveNavbar />,
  },
  {
    link: "*",
    component: <Error />,
  },
];

function Error() {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ my: 10 }}>
        This Page does not exist Go Back
      </Typography>
      <Typography variant="h5" align="center">
        <Link to={"/"}>Go Back</Link>
      </Typography>
    </>
  );
}

export default function ShowCaseRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routesData.map((data) => {
          return (
            <Route
              key={data.link}
              path={data.link}
              element={data.component}
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
