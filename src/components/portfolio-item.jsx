import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { GatsbyImage } from "gatsby-plugin-image";

const ItemBody = styled(Grid)(({theme}) => ({
  position: "relative",
}));

const ZoomImageBox = styled(Box)(() => ({
  borderRadius: 5,
  transition: "box-shadow 0.5s ease-in-out !important",      
  boxShadow: "-4px 4px 29px -4px rgba(0,0,0,0.15)",
  overflow: "hidden",
  "& img": {
    filter: 'grayscale(100%)',  
    transition: "transform 1.25s ease-in-out, filter 0.5s ease-in-out !important",      
    transformOrigin: "0 0",    
  },
  "&:hover": {
    boxShadow: "-4px 4px 29px -4px rgba(0,0,0,0.55)",
  
    "& img": {
      transform: "scale(1.1)",
      filter: 'unset',  
    }
  }
}));

const PortfolioItem = ({name, description, gImageData}) => {
  return (
    <ItemBody container direction="column">
      <ZoomImageBox sx={{mb: 4}}>
        <GatsbyImage image={gImageData} alt={name}/>
      </ZoomImageBox>
      <Typography gutterBottom variant="h6" color="secondary" sx={{fontWeight: 200, textTransform: 'uppercase', mt: '-2px', mb: 0}}>{name}</Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </ItemBody>
  );
};

export default PortfolioItem;