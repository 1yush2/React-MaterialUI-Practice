import {
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React from "react";

const PaymentData = [
  {
    id: "cardName",
    label: "Name on Card",
    autoComplete: "cc-name",
  },
  {
    id: "cardNumber",
    label: "Card number",
    autoComplete: "cc-number",
  },
  {
    id: "expDate",
    label: "Expiry date",
    autoComplete: "cc-exp",
  },
  {
    id: "cvv",
    label: "CVV",
    helperText: "Last three digits on signature strip",
    autoComplete: "cc-csc",
  },
];

export default function Payment() {
  return (
    <>
      <Typography variant="h6">Payment method </Typography>
      <Grid container spacing={3}>
        {PaymentData.map((payData) => {
          const { id, label, autoComplete, helperText } = payData;
          return (
            <Grid key={id} item xs={12} md={6}>
              <TextField
                required
                id={id}
                label={label}
                fullWidth
                autoComplete={autoComplete}
                helperText={helperText}
                variant="standard"
              />
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </>
  );
}
