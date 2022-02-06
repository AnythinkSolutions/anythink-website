import * as React from "react";
import { Box, Stack, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import headshot from "../images/headshot.jpg";
// import Link from "../components/Link";

const HeroImage = styled("img")({
  maxHeight: 500,
});


const AboutSection = () => {
  return (
    <Grid container>
      <Grid item container direction="column" alignItems="center" sx={{mt: 6, mb: 4}}>
        <Typography variant="h3" component="h3" color="primary" sx={{fontWeight: 300}}>Brian Schwalm</Typography>
        <Typography variant="h3" component="h3" color="gray" sx={{fontWeight: 300}} className="aos-init" data-aos="fade">Anythink Solutions</Typography>
        <Typography variant="h3" component="h3" color="gray" sx={{fontWeight: 300}} className="aos-init" data-aos="fade">Freelance Software Developer</Typography>
      </Grid>

      <Grid item md={2} sm={4}>
        <Box>    
          <Stack>
            <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>About Me</Typography>
            <Typography>I'm a software developer who specializes in front-end development.</Typography>

            <Typography variant="h6" sx={{mt: 4, color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Contact Info</Typography>
            <Typography>Boston, MA</Typography>
            <Typography>info@anythinksolutions.com</Typography>
            <Typography>+1.303.817.2927</Typography>
          </Stack>      
        </Box>
      </Grid>

      <Grid item md={8} sm={4} container justifyContent="center">
        <Box sx={{p: 2, borderRadius: 60, border: '1px solid lightgray'}}>
          <Box sx={{borderRadius: 60, border: '1px solid lightgray', overflow: 'hidden', lineHeight: 0}}>
            <HeroImage src={headshot} alt="headshot" sx={{maxHeight: '500px'}}/>
          </Box>
        </Box>
      </Grid>

      <Grid item md={2} sm={4}>
        <Box>
          <Stack alignItems="flex-end">
            <Typography variant="h6" textAlign="right" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Years Experience</Typography>
            <Typography variant="h2">24</Typography>

            <Typography variant="h6" textAlign="right" sx={{mt: 4, color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Years Freelance</Typography>
            <Typography variant="h2">15</Typography>

            <Typography variant="h6" textAlign="right" sx={{mt: 4, color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Satisfied Clients</Typography>
            <Typography variant="h2">100%</Typography>
          </Stack>      
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutSection;