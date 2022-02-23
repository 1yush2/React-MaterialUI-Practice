import React from "react";
import MaterialAlbumClone from "./MaterialAlbumClone";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./../theme";

export default function MaterialPractice() {
  return (
    <div>
        <CssBaseline />
      <ThemeProvider theme={theme}>
        <MaterialAlbumClone />
      </ThemeProvider>
    </div>
  );
}
