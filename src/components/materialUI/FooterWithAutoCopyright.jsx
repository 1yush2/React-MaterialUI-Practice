import { Typography, Container } from "@mui/material";
import React from "react";

function Copyright() {
  return (
    <Typography color="text.secondary" variant="body2">
      Copyright © Aayush Website {new Date().getFullYear()}.
    </Typography>
  );
}

export default function FooterWithAutoCopyright() {
  return (
    <Container
      sx={{
        "& > *": {
          textAlign: "center",
        },
      }}
    >
      <Typography variant="h6" color="text.primary">
        Footer
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Container>
  );
}
