import * as React from "react";
import { Button, Box, Stack, Grid } from "@mui/material";
import Link from "../components/Link";

export default function Header() {
  return (
    <Grid container>
      <Grid item lg={4} sm={6}>
        <Box>
          <Stack direction="row" spacing={3}>
            <Button component={Link} color="primary" to="#">Home</Button>
            <Button component={Link}  to="#about">About</Button>
            <Button component={Link}  to="#services">Services</Button>
          </Stack>
        </Box>
      </Grid>

      <Grid item lg={4}>

      </Grid>

      <Grid item lg={4} sm={6} container justifyContent="flex-end">
        <Box>
          <Stack direction="row" spacing={3}>
            <Button component={Link}  to="#portfolio">Portfolio</Button>
            <Button component={Link}  to="#testimonials">Testimonials</Button>
            <Button component={Link}  to="/contact">Contact</Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}