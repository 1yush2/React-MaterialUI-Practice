import StarIcon from "@mui/icons-material/StarBorder";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import FooterWithAutoCopyright from "./FooterWithAutoCopyright";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function MaterialPricingClone() {
  return (
    <Box>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Iyush Company</Typography>
          <Box
            component="nav"
            sx={{
              "&& > *": {
                color: (theme) => theme.palette.primary.second,
                textDecoration: "none",
                mx: 1,
                fontSize: "smaller",
                cursor: "pointer",
                textTransform: "capitalize",
              },
            }}
          >
            <Link variant="button">Features</Link>
            <Link variant="button">Enterprise</Link>
            <Link variant="button">Support</Link>
            <Button
              variant="outlined"
              sx={{ borderColor: (theme) => theme.palette.primary.second }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h3" color="text.primary" align="center">
          Pricing
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          align="center"
          component="p"
          mt={1}
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It's built with default MUI components with little
          customization.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={6} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{
                    align: "center",
                    color: (theme) => theme.palette.primary.second,
                  }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) => theme.palette.grey[200],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <Box>
                    {tier.description.map((line) => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container component="footer" sx={{ py: 3, mt: 7 }} maxWidth="md">
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "&& > * ": {
                    color: (theme) => theme.palette.primary.second,
                    textDecoration: "none",
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
              >
                {footer.description.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <FooterWithAutoCopyright />
      </Container>
    </Box>
  );
}
