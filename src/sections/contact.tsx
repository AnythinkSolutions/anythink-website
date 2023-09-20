import React from "react";
import { Box, Button, Grid, Typography, TextField, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import { green } from "@mui/material/colors";
import { StaticImage } from "gatsby-plugin-image";

const CONTACT_URL = "/api/sendEmail"; //https://us-central1-anythink-website.cloudfunctions.net/sendEmail";
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const ERROR_DEFAULT = {name: null, email: null, honeypot: null, send: false};
const VALUES_DEFAULT = {name: "", email: "", phone: "", message: "", honeypot: ""};

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

const ThankYouBox = styled(Box)(({theme}) => ({
  marginTop: theme.spacing(4),
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  paddingBottom: 64,
  transition: "box-shadow 0.5s ease-in-out !important",  
  background: green[100],    
  position: "relative",
  "&:hover": {
    boxShadow: "-4px 4px 29px -4px rgba(0,0,0,0.15)",
  }
}));

const HoneypotField = styled(TextField)(() => ({
  display: "none",
}));


const ContactSection = () => {

  const [formState, setFormState] = React.useState({...VALUES_DEFAULT});
  const [errorState, setErrorState] = React.useState({...ERROR_DEFAULT});
  const [isSent, setIsSent] = React.useState(false);

  function onFormChange(event){
    const target = event.target;
    setFormState({
      ...formState,
      [target.id]: target.value
    });    
  }

  function validateForm(values){
    const newState = {...ERROR_DEFAULT};
    if(values.honeypot !== ""){
      console.error("Are you a bot? This form is for humans.");
      setErrorState({...ERROR_DEFAULT, honeypot: 'Are you a bot? This form is for humans.'});
      return false;
    }
    else{
      let errCount = 0;
      if(!values.name || values.name.trim().length === 0){
        errCount++;
        newState.name = 'Please enter your name';
      }
      if(!values.email || !EMAIL_REGEX.test(values.email)){
        errCount++;
        newState.email= 'Please enter a valid email address';
      }

      setErrorState(newState);
      return errCount === 0;
    }
  }

  async function sendEmail(event){
    const isValid = validateForm(formState);
    if(!isValid){
      console.log("Invalid contact form input: ", formState);
      return;
    }

    // console.log("props submitted: ", formState);
    const request = new Request(CONTACT_URL, {
      method: 'POST',
      headers: {
        'Accept'        : 'application/json', 
        'Content-Type'  : 'application/json'
      },
      body: JSON.stringify({data: formState})
    });

    const result = await fetch(request);
    // console.log("contact request result: ", result);
    if(result.status !== 200){
      setErrorState({...ERROR_DEFAULT, send: true});
    }
    else{
      setIsSent(true);
      setFormState({...VALUES_DEFAULT});
    }

    event.stopPropagation();
  }

  return (
    <Box sx={{paddingBottom: 6, position: "relative"}}>
      <Grid container>
        <Grid item container direction="column" className="aos-init aos-animate" data-aos="fade" data-aos-delay="100">
          <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Contact Me</Typography>
        </Grid>

        <Grid item container>
          <Grid item md={6} sm={12}>
            <div  className="aos-init" data-aos="fade" data-aos-duration={1000}>
              {!isSent && (
                <ContactForm id="contact-form" onSubmit={sendEmail}>
                  <div className="corner corner-left-top"></div>
                  <div className="corner corner-right-top"></div>
                  <div className="corner corner-right-bottom"></div>
                  <div className="corner corner-left-bottom"></div>
                  <Typography variant="h4" sx={{mb: 2}}>Tell me about your project</Typography>
                  <Typography variant="body1" sx={{mb: 2}}>Whether you're in the early stages, or ready to hand over a requirements doc, I'm happy to talk. The more information you provide, the more prepared I'll be.</Typography>
                  {errorState.send && <Typography variant="body1" color="red" sx={{mb: 2}}>Hmm... something went wrong. Please try again, and if that doesn't work, you can reach me at the email address to your right.</Typography>}
                  <TextField id="name" value={formState.name} onChange={onFormChange} variant="standard" label="Your name*" fullWidth sx={{marginBottom: 2}} error={!!errorState.name} helperText={errorState.name} />
                  <TextField id="email" value={formState.email} onChange={onFormChange} type="email" variant="standard" label="Your email address*" fullWidth sx={{marginBottom: 2}} error={!!errorState.email} helperText={errorState.email} />
                  <TextField id="phone" value={formState.phone} onChange={onFormChange} variant="standard" label="Your phone number" fullWidth sx={{marginBottom: 2}} />
                  <TextField id="message" value={formState.message} onChange={onFormChange} variant="standard" label="Your message" multiline rows={4} fullWidth sx={{marginBottom: 2}} />
                  <HoneypotField id="honeypot" value={formState.honeypot} onChange={onFormChange} variant="standard" label="Leave this field blank, it is only for bots" fullWidth error={!!errorState.honeypot} helperText={errorState.honeypot}/>
                  <Button type="button" onClick={sendEmail} variant="outlined" sx={{position: "absolute", bottom: 15, right: 32}}>Send Message</Button>
                </ContactForm>  
              )}
              {isSent && (
                <ThankYouBox>
                  <div className="corner corner-left-top"></div>
                  <div className="corner corner-right-top"></div>
                  <div className="corner corner-right-bottom"></div>
                  <div className="corner corner-left-bottom"></div>
                  <Typography variant="h4" sx={{mb: 2, textAlign: "center"}}>Thank you for reaching out!</Typography>
                  <Typography variant="body1" sx={{mb: 2, textAlign: "center"}}>I truly appreciate it. Please allow me a day to review your message and then I will contact you.</Typography>
                </ThankYouBox>
              )}
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
                Boulder, CO<br/>
                80302
              </Typography>
            </Grid>
            <Grid item sx={{"& a": { marginRight: 1}}}>
              <Typography variant="h5">My Socials</Typography>
              <Tooltip title="LinkedIn">
                <a href="https://linkedin.com/in/brianschwalm" target="_blank">
                  <StaticImage src="../images/logos/linkedin.svg" alt="LinkedIn Contact Info" height={36} width={36}/>
                </a>
              </Tooltip>
              {/* <Tooltip title="The Roaming Coder">
                <a href="https://www.theroamingcoder.com" target="_blank">
                  <StaticImage src="../images/logos/roaming-coder.png" alt="The Roaming Coder website" height={36} width={36}/>
                </a>
              </Tooltip> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;