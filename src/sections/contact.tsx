import React from "react";
import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";

const ContactForm = styled("form")(({theme}) => ({
  marginTop: theme.spacing(4),
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  paddingBottom: 64,
  transition: "box-shadow 0.5s ease-in-out !important",  
  background: theme.palette.grey[100],    
  position: "relative",
  "&:hover": {
    boxShadow: "-4px 4px 29px -4px rgba(0,0,0,0.15)",
  }
}));


const ContactSection = () => {
  return (
    <Box sx={{paddingBottom: 6, position: "relative"}}>
      <Grid container>
        <Grid item container direction="column" className="aos-init aos-animate" data-aos="fade" data-aos-delay="100">
          <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Contact Me</Typography>
        </Grid>

        <Grid item container>
          <Grid item md={6} sm={12}>
            <div  className="aos-init" data-aos="fade" data-aos-duration={1000}>
              <ContactForm id="contact-form">
                <div className="corner corner-left-top"></div>
                <div className="corner corner-right-top"></div>
                <div className="corner corner-right-bottom"></div>
                <div className="corner corner-left-bottom"></div>
                <Typography variant="h4" sx={{mb: 2}}>Tell me about your project</Typography>
                <Typography variant="body1" sx={{mb: 2}}>Whether you're in the early stages, or ready to hand over a requirements doc, I'm happy to talk. The more information you provide, the more prepared I'll be.</Typography>
                <TextField id="name" variant="standard" label="Your name*" fullWidth sx={{marginBottom: 2}} />
                <TextField id="email" variant="standard" label="Your email address*" fullWidth sx={{marginBottom: 2}} />
                <TextField id="phone" variant="standard" label="Your phone number" fullWidth sx={{marginBottom: 2}} />
                <TextField id="message" variant="standard" label="Your message" multiline rows={4} fullWidth sx={{marginBottom: 2}} />
                <Button type="submit" variant="outlined" sx={{position: "absolute", bottom: 15, right: 32}}>Send Message</Button>
              </ContactForm>  
            </div>
          </Grid>
          <Grid item md={1} sm={0} />
          <Grid item md={4} sm={12} container direction="column" spacing={4} sx={{paddingTop: 4, paddingLeft: 4}}>
            <Grid item>
              <Typography variant="h5">My Info</Typography>
              <Typography variant="body1" sx={{fontSize: 22, fontWeight: 200}}>
                <a href="mailto:info@anythinksolutions.com">info@anythinksolutions.com</a><br/>
                +1.303.817.2927
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">My Home Base</Typography>
              <Typography variant="body1" sx={{fontSize: 22, fontWeight: 200}}>
                Boston, MA<br/>
                02129
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">My Socials</Typography>
              <Typography variant="body1" sx={{fontSize: 22, fontWeight: 200}}>
                <a href="https://linkedin.com/in/brianschwalm" target="_blank">
                  <StaticImage src="../images/logos/linkedin.svg" alt="LinkedIn" height={36} width={36}/>
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;