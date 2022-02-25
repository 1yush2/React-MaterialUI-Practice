import React from "react";
import MaterialAlbumClone from "./MaterialAlbumClone";
import MaterialSimpleSIgn from "./materialSimpleSIgn";
import MaterialPricingClone from "./MaterialPricingClone";
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
        <MaterialPricingClone />
      </ThemeProvider>
    </div>
  );
}
