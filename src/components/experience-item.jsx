import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ItemBody = styled(Grid)(({theme}) => ({
  position: "relative",
  // padding: theme.spacing(2)
}));

const ServiceCardFlat = ({title, company, description}) => {
  return (
    <ItemBody container direction="column">
      <Typography gutterBottom variant="h6" color="secondary" sx={{fontWeight: 200, textTransform: 'uppercase', mt: '-2px', mb: 0}}>{title}</Typography>
      <Typography gutterBottom variant="h6" sx={{fontWeight: 200}}>{company}</Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </ItemBody>
  );
};

export default ServiceCardFlat;