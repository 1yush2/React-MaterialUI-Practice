import {
  Card,
  Box,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

export default function ShowCase() {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Box>
        <Container maxWidth={"md"} sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {cardArray.map((carde) => (
              <Grid key={carde} item md={4}>
                <Card>
                  <CardContent>
                    <Typography>Hello</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
