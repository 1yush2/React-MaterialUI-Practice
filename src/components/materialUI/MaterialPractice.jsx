import React from "react";
import MaterialAlbumClone from "./MaterialAlbumClone";
import MaterialSimpleSIgn from "./materialSimpleSIgn";
import MaterialPricingClone from "./MaterialPricingClone";
import Checkout from "./multiStepForm/Checkout";
import ResponsiveNavbar from "./ResponsiveNavbar";
import DashboardClone from "./Dashboard/DashboardClone";
import MaterialPictureSignIn from "./MaterialPictureSignIn";
import ShowCaseRoutes from "./ShowCaseRoutes"
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./../theme";

export default function MaterialPractice() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* <MaterialAlbumClone /> */}
        {/* <MaterialSimpleSIgn /> */}
        {/* <MaterialPricingClone /> */}
        {/* <ResponsiveNavbar /> */}
        {/* <Checkout /> */}
        {/* <DashboardClone /> */}
        {/* <MaterialPictureSignIn /> */}
        <ShowCaseRoutes />
      </ThemeProvider>
    </div>
  );
}
