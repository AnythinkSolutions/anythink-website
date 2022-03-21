import * as React from "react";
import { Button, Box, Stack, Typography, Grid } from "@mui/material";
import Link from "../components/Link";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  return (
    <Grid container rowSpacing={{lg: 0, xs: 1}}>
      <Grid item sm={4} xs={12} container justifyContent={{md: "flex-start", xs: "center"}} display={{sm: "unset", xs: "none"}}>
        <Box>
          <Stack direction="row" spacing={3}>
            <Button component={Link} color="primary" to="#">Home</Button>
            <Button component={Link}  to="#about">About</Button>
            <Button component={Link}  to="#services">Services</Button>
          </Stack>
        </Box>
      </Grid>

      <Grid item sm={4} xs={12} container justifyContent="center" order={{sm: 2, xs: 3}} mt={{xs: 3}}>
        <Box sx={{marginTop: -2, textAlign: "center"}}>
          <StaticImage src="../images/favicon.png" height={36} alt="Anythink Solutions Logo" />
          <Typography variant="h5" component="h5" color="gray" sx={{fontWeight: 300}} className="aos-init" data-aos="fade">Anythink Solutions</Typography>
        </Box>
      </Grid>

      <Grid item sm={4} xs={12} container justifyContent={{md: "flex-end", xs: "center"}} order={{sm: 3, xs: 2}} display={{sm: "flex", xs: "none"}}>
        <Box>
          <Stack direction="row" spacing={3}>
            <Button component={Link}  to="#skills">Skills</Button>
            <Button component={Link}  to="#portfolio">Portfolio</Button>
            {/* <Button component={Link}  to="#testimonials">Testimonials</Button> */}
            <Button component={Link}  to="#contact">Contact</Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}