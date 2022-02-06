import * as React from "react";
import { Grid, Typography } from "@mui/material";
import ExperienceItem from '../components/experience-item';
import { useStaticQuery, graphql } from 'gatsby';

const ExperienceSection = () => {

  const data = useStaticQuery(graphql`
    query {
      allExperiencesJson {
        edges {
          node {
            headline
            items {
              category
              company
              description
              title
            }
          }
        }
      }      
    }
  `);

  const dataNode = data.allExperiencesJson.edges[0].node;
  const jobs = dataNode.items.filter(node => node.category === "job");
  const schools = dataNode.items.filter(node => node.category === "school");

  let itemKey = 0;

  return (
    <Grid container>
      <Grid container direction="column" className="aos-init aos-animate" data-aos="fade" data-aos-delay="100">
        <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Experience &amp; Education</Typography>
        <Typography variant="h4" sx={{mb: 2}}>{dataNode.headline}</Typography>
      </Grid>

      <Grid container className="resume">

        <Grid item md={6} container direction="column" sx={{p: 4}} className="resume-box">
          {jobs.map((node, index) => 
            <Grid key={itemKey++} item className="aos-init aos-animate item-resume-box" data-aos="fade-left" data-aos-delay={100 + (index * 50)}>
              <ExperienceItem {...node} />
            </Grid>  
          )}
        </Grid>

        <Grid item md={6} container sx={{p: 4}} direction="column" className="resume-box">
          {schools.map((node, index) => 
            <Grid key={itemKey++} item className="aos-init aos-animate item-resume-box" data-aos="fade-left" data-aos-delay={100 + (index * 50)}>
              <ExperienceItem {...node} />
            </Grid>  
          )}
        </Grid>

      </Grid>

    </Grid>
  );
};

export default ExperienceSection;