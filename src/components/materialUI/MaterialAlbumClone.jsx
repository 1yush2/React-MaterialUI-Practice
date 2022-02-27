import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box
} from "@mui/material";
import React from "react";
import FooterWithAutoCopyright from "./FooterWithAutoCopyright";

export default function MaterialAlbumClone() {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ p: "4em 0", bgcolor: "background.paper" }}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="text.primary">
              Album layout
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ py: 3 }}
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" pt={2}>
              <Button variant="contained">MAIN CALL TO ACTION</Button>
              <Button variant="outlined">SECONDARY ACTION</Button>
            </Stack>
          </Container>
          <Box>
            <Container maxWidth={"md"} sx={{ py: 8 }}>
              <Grid container spacing={4} justifyContent="center">
                {cardArray.map((cardee) => {
                  return (
                    <Grid item md={4} xs={12} sm={6} key={cardee}>
                      <Card sx={{ height: "100%" }}>
                        <CardMedia
                          component="img"
                          image="https://images.unsplash.com/photo-1642406415849-a410b5d01a94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                          sx={{ pt: "56.25%" }}
                        />

                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h5">Heading</Typography>
                          <Typography variant="body1">
                            This is a media card. You can use this section to
                            describe the content.
                          </Typography>
                        </CardContent>

                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Box>
        </Box>
      </main>
      <footer>
        <FooterWithAutoCopyright />
      </footer>
    </div>
  );
}
