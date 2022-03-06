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
      <Grid item md={4} container direction="column" className="aos-init aos-animate" data-aos="fade" data-aos-delay="100">
        <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Services</Typography>
        <Typography variant="h4" sx={{mb: 2}}>{servicesData.headline}</Typography>
        <Typography variant="body">{servicesData.subhead}</Typography>
      </Grid>

      <Grid item md={8} container>

        <Grid item md={6} container direction="column" sx={{p: 4}} rowGap={4} alignItems="center">
          <Grid item className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <ServiceCard {...servicesData.items[0]} />
          </Grid>
          <Grid item className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
            <ServiceCard {...servicesData.items[1]} />
          </Grid>
        </Grid>

        <Grid item md={6} container sx={{mt: 6, p: 4}} direction="column" rowGap={4} alignItems="center">
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