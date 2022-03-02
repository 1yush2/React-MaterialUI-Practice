import { Typography, Container } from "@mui/material";
import React from "react";

function Copyright() {
  return (
    <Typography align="center" color="text.secondary" variant="body2">
      Copyright © Aayush Website {new Date().getFullYear()}.
    </Typography>
  );
}

export default function FooterWithAutoCopyright() {
  return (
    <Container>
      <Typography align="center" variant="h6" color="text.primary">
        Footer
      </Typography>
      <Typography align="center" variant="body1" color="text.secondary">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Container>
  );
}
