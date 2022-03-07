import {
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React from "react";

const ADDRESS_1 = "address1";
const ADDRESS_2 = "address2";

const ShippingData = [
  {
    id: "firstName",
    name: "firstName",
    label: "First name",
    autoComplete: "given-name",
  },
  {
    id: "lastName",
    name: "lastName",
    label: "Last name",
    autoComplete: "family-name",
  },
  {
    id: "address1",
    name: "address1",
    label: "Address line 1",
    autoComplete: "shipping address-line1",
  },
  {
    id: "address2",
    name: "address2",
    label: "Address line 2",
    autoComplete: "shipping address-line2",
  },
  {
    id: "city",
    name: "city",
    label: "City",
    autoComplete: "shipping address-level2",
  },
  {
    id: "state",
    name: "state",
    label: "State/Province/Region",
  },
  {
    id: "zip",
    name: "zip",
    label: "Zip / Postal code",
    autoComplete: "shipping postal-code",
  },
  {
    id: "country",
    name: "country",
    label: "Country",
    autoComplete: "shipping country",
  },
];

export default function Shipping() {
  return (
    <>
      <Typography variant="h6">Shipping address</Typography>
      <Grid container spacing={3}>
        {ShippingData.map((shipData) => {
          const { id, name, label, autoComplete } = shipData;
          return id === ADDRESS_1 || id === ADDRESS_2 ? (
            <Grid key={id} item xs={12}>
              <TextField
                required
                id={id}
                name={name}
                label={label}
                fullWidth
                autoComplete={autoComplete}
                variant="standard"
              />
            </Grid>
          ) : (
            <Grid key={id} item xs={12} sm={6}>
              <TextField
                required
                id={id}
                name={name}
                label={label}
                fullWidth
                autoComplete={autoComplete}
                variant="standard"
              />
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  );
}
