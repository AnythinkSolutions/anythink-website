import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { GatsbyImage } from "gatsby-plugin-image";

const ItemBody = styled(Grid)(({theme}) => ({
  position: "relative",
  // border: `1px solid ${theme.palette.grey[400]}`,
  // background: theme.palette.grey[100],
}));

const PortfolioItem = ({name, description, gImageData}) => {
  return (
    <ItemBody container direction="column">
      <Box sx={{mb: 4}}>
        <GatsbyImage image={gImageData} alt={name}/>
      </Box>
      <Typography gutterBottom variant="h6" color="secondary" sx={{fontWeight: 200, textTransform: 'uppercase', mt: '-2px', mb: 0}}>{name}</Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </ItemBody>
  );
};

export default PortfolioItem;