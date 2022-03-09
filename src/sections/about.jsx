import * as React from "react";
import { Box, Stack, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import headshot from "../images/headshot.jpg";

const HeroImage = styled("img")({
  maxHeight: 500,
});


const AboutSection = () => {
  return (
    <Grid container>
      <Grid item container direction="column" alignItems="center" mt={{sm: 6, xs: 2}} sx={{mb: 4}}>
        <Typography variant="h3" component="h3" color="primary" textAlign="center" fontWeight="400" mb={{xs: 1}}>Brian Schwalm</Typography>
        <Typography variant="h3" component="h3" color="gray" textAlign="center" fontWeight="200" className="aos-init text-center" data-aos="fade">Freelance Software Developer</Typography>
      </Grid>

      <Grid item md={2} sm={4} container justifyContent={{sm: "flex-start", xs: "center"}}>
        <Box>    
          <Stack>
            <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} textAlign={{sm: "left", xs: "center"}}  gutterBottom>About Me</Typography>
            <Typography textAlign={{sm: "left", xs: "center"}} >I'm a full-stack software developer. I love to build intuitive, user-friendly applications to solve complex problems. When I'm not coding, you'll find me traveling the world, camping in the wilderness or fly fishing in a mountain river.</Typography>

            <Typography variant="h6" sx={{mt: 4, color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} textAlign={{sm: "left", xs: "center"}} gutterBottom>Contact Info</Typography>
            <Typography textAlign={{sm: "left", xs: "center"}}>Boston, MA</Typography>
            <Typography textAlign={{sm: "left", xs: "center"}}>info@anythinksolutions.com</Typography>
            <Typography textAlign={{sm: "left", xs: "center"}}>+1.303.817.2927</Typography>
          </Stack>      
        </Box>
      </Grid>

      <Grid item md={8} sm={4} container justifyContent="center">
        <Box sx={{p: 2, borderRadius: 60, border: '1px solid lightgray'}} my={{xs: 2}}>
          <Box sx={{borderRadius: 60, border: '1px solid lightgray', overflow: 'hidden', lineHeight: 0}}>
            <HeroImage src={headshot} alt="Brian Schwalm headshot" sx={{maxHeight: '500px'}}/>
          </Box>
        </Box>
      </Grid>

      <Grid item md={2} sm={4} container  justifyContent={{sm: "flex-end", xs: "center"}}>
        <Box>
          <Stack alignItems={{sm: "flex-end", xs: "center"}}>
            <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} textAlign={{sm: "right", xs: "center"}} gutterBottom>Years Experience</Typography>
            <Typography variant="h2" textAlign={{sm: "right", xs: "center"}}>24</Typography>

            <Typography variant="h6" sx={{mt: 4, color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} textAlign={{sm: "right", xs: "center"}} gutterBottom>Years Freelance</Typography>
            <Typography variant="h2" textAlign={{sm: "right", xs: "center"}}>15</Typography>

            {/* <Typography variant="h6" sx={{mt: 4, color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Satisfied Clients</Typography>
            <Typography variant="h2">100%</Typography> */}
          </Stack>      
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutSection;