import * as React from "react";
import { createSvgIcon, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CardBody = styled(Grid)(({theme}) => ({
  height: 200,
  width: 300,
  position: "relative",
  backgroundColor: theme.palette.grey[200],
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  }
}));

const ServiceCard = ({title, description, iconPath}) => {

  const ServiceIcon = iconPath ? createSvgIcon(<path d={iconPath} />, "service-icon") : null;
  // console.log("title: ", title, "iconPath: ", iconPath);

  return (
    <CardBody container direction="column">
      <div className="corner corner-left-top"></div>
      <div className="corner corner-right-bottom"></div>
      {iconPath ? <ServiceIcon  color="primary" sx={{fontSize: 48, mb: 2}} /> : null}
      <Typography gutterBottom variant="h5" component="div">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardBody>
  );
};

export default ServiceCard;