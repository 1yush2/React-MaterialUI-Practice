import {
  AppBar,
  Container,
  Paper,
  StepLabel,
  Stepper,
  Step,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout() {
  const [actStep, setActStep] = useState(0);

  const handleNext = () => {
    setActStep(actStep + 1);
  };

  const handleBack = () => {
    setActStep(actStep - 1);
  };

  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Aayush Company
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h5" align="center">
            Check Out
          </Typography>
          <Stepper activeStep={actStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {actStep !== 0 && <Button onClick={handleBack}>Back</Button>}
            <Button onClick={handleNext} variant="contained">
              Next
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
