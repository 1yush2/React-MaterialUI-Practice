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
import Payment from "./Payment";
import Review from "./Review";
import Shipping from "./Shipping";
import FooterCopyright from "./../FooterWithAutoCopyright";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(content) {
  switch (content) {
    case 0:
      return <Shipping />;
    case 1:
      return <Payment />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

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
          {actStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(actStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {actStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                <Button onClick={handleNext} variant="contained">
                  {actStep !== steps.length - 1 ? "Next" : "Place Order"}
                </Button>
              </Box>
            </>
          )}
        </Paper>
        <FooterCopyright />
      </Container>
    </>
  );
}
