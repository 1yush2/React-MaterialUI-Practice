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
import { Link } from "react-router-dom";

export default function ShowCase() {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const cardData = [
    {
      name: "Dashboard",
      link: "/Dashboard",
    },
    {
      name: "MultiStepForm",
      link: "/MultiStepForm",
    },
    {
      name: "Album",
      link: "/Album",
    },
    {
      name: "PictureSignIn",
      link: "/PictureSignIn",
    },
    {
      name: "SignIn",
      link: "/SignIn",
    },
    {
      name: "Pricing",
      link: "/Pricing",
    },
    {
      name: "ResponsiveNav",
      link: "/ResponsiveNav",
    },
  ];

  return (
    <>
      <Box sx={{ backgroundColor: (theme) => theme.palette.secondary.main }} height='100vh'>
        <Typography variant="h4" align="center" pt={4}>
          Webpages Links
        </Typography>
        <Container maxWidth={"xl"} sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {cardData.map((carde) => (
              <Grid key={carde.name} item md={4} xs={12}>
                <Card elevation={8}>
                  <CardContent>
                    <Typography variant="subtitle2">{carde.name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={carde.link} style={{ fontSize: "smaller" }}>
                      Learn More
                    </Link>
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
