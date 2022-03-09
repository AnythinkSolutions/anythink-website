import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const SkillBody = styled(Grid)(({theme}) => ({
  height: 192,
  width: 118,
  position: "relative",
  backgroundColor: theme.palette.grey[100],
  padding: "3.4375rem 0.9375rem 2.8125rem",
  borderRadius: "9.375em",
  textAlign: "center",
  transition: "box-shadow 0.5s ease-in-out !important",      
  "& .gatsby-image-wrapper": {
    overflow: "visible",
  },
  "& img": {
    filter: "grayscale(1)",    
    transition: "transform 0.5s ease-in-out, filter 0.5s ease-in-out !important",      
    transformOrigin: "0 0",    
  },
  "& h6": {
    transition: "transform 0.5s ease-in-out, color 0.5s ease-in-out !important",      
    transformOrigin: "0 0",    
  },
  "&:hover": {
    boxShadow: "-4px 4px 29px -4px rgba(0,0,0,0.25)",
  
    "& img": {
      transform: "translate(0, -5px)",
      filter: "grayscale(0)",
      // filter: "unset",
    },
    "& h6": {
      transform: "translate(0, -5px)",
      color: theme.palette.primary.dark,
    }
  }
}));

const SkillCard = ({title, delay, textLeftAdjust, children}) => {
  const delayValue = delay * 100;

  return (
    <Grid item md={2} sm={3} xs={6}  className="aos-init aos-animate" data-aos="fade-left" data-aos-delay={delayValue} data-aos-duration={750}>
      <SkillBody>
        <Grid container direction="column" alignItems="center" sx={{marginTop: "-2em"}}>
          {children}
          <Typography variant="h6" sx={{marginTop: "2em", marginLeft: textLeftAdjust}}>{title}</Typography>
        </Grid>
      </SkillBody>
    </Grid>
  );
};

export default SkillCard;

SkillCard.defaultProps = {
  delay: 0,
  textLeftAdjust: null,
};