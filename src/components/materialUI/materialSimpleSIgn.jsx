import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Link
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function MaterialSimpleSIgn() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
      </Box>
      <Box>
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
        <Button variant="contained" fullWidth sx={{my:2}}>
          Sign IN
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
