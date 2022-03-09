import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { useStaticQuery, graphql } from 'gatsby';
import ServiceCard from "../components/service-card";

const ServicesSection = () => {

  const data = useStaticQuery(graphql`
    query {
      allServicesJson {
        edges {
          node {
            headline
            subhead
            items {
              id
              title
              description
              iconPath
            }
          }
        }
      }      
    }
  `);

  const servicesData = data.allServicesJson.edges[0].node;
  // console.log("services data: ", servicesData);
  
  return (
    <Grid container>
      <Grid item md={4} sm={12} container direction="column" className="aos-init aos-animate" data-aos="fade" data-aos-delay="100">
        <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Services</Typography>
        <Typography variant="h4" sx={{mb: 2}}>{servicesData.headline}</Typography>
        <Typography variant="body">{servicesData.subhead}</Typography>
      </Grid>

      <Grid item md={8} sm={12} container>

        <Grid item sm={6} xs={12} container direction="column" p={{sm: 4, xs: 2}} rowGap={{sm: 4, xs: 2}} alignItems="center" pb={{xs: 1}}>
          <Grid item className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <ServiceCard {...servicesData.items[0]} />
          </Grid>
          <Grid item className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
            <ServiceCard {...servicesData.items[1]} />
          </Grid>
        </Grid>

        <Grid item sm={6} xs={12} container mt={{sm: 6, xs: 0}} p={{sm: 4, xs: 2}} direction="column" rowGap={{sm: 4, xs: 2}} alignItems="center" pt={{xs: 1}}>
          <Grid item className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <ServiceCard {...servicesData.items[2]} />
          </Grid>
          <Grid item className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
            <ServiceCard {...servicesData.items[3]} />
          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default ServicesSection;