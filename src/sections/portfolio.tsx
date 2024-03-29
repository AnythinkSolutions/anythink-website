import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { useStaticQuery, graphql } from 'gatsby';
import PortfolioItem from "../components/portfolio-item";

const PortfolioSection : React.FC = () => {

  const data = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
            id
            key
            name
            description
            image
          }
        }
      }
      allImageSharp {
        edges {
          node {
            id
            gatsbyImageData(
              width: 600
              transformOptions: {fit: FILL, cropFocus: NORTHWEST}
            )
            fluid {
              originalName
            }
          }
        }
      }
    }
  `);  

  // console.log("portfolio data: ", data);
  const projects = data.allPortfolioJson.edges;
  const images = data.allImageSharp.edges as any[];
  // console.log("portfolio images: ", images);

  const projectsWithImages = projects.reduce((result, project) => {
    const imageData = images.find(img => img.node.fluid.originalName === project.node.image);

    const item = {
      ...project.node,
      gImageData: imageData ? imageData.node.gatsbyImageData : null
    };

    const items = result.push(item);
    return result;
  }, []);

  // console.log("Projects with Image Data: ", projectsWithImages);

  return (
    <Grid container>
      <Grid container direction="column" className="aos-init aos-animate" data-aos="fade" data-aos-delay="100">
        <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Recent Projects</Typography>
        <Typography variant="h4" sx={{mb: 2}}>Highlighting some of my recent work</Typography>
      </Grid>
      <Grid container spacing={3} alignItems="space-between">
        {projectsWithImages.map((item: any, index: number) => {
          return (
            <Grid key={item.id} item md={5} className="aos-init aos-animate" data-aos="fade-in" data-aos-delay={100 * index}>
              <PortfolioItem {...item} />
            </Grid>
          );
        })}
      </Grid>

    </Grid>
  );

};

export default PortfolioSection;