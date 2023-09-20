import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import SkillCard from "../components/skill-card";
import { StaticImage } from "gatsby-plugin-image";

const SkillsSection = () => {
  const imgWidth = 64;
  const imgHeight = 64;

  return (
    <Grid container rowSpacing={2}>
      <Grid item md={12} container direction="column" justifyContent="center" className="aos-init" data-aos="fade" data-aos-duration={1000}>
        <Grid item container justifyContent="center">
          <Typography variant="h6" sx={{color: 'info.main', fontWeight: 200, textTransform: 'uppercase'}} gutterBottom>Skills</Typography>
        </Grid>
        <Grid container sx={{marginBottom: 3}}>
          <Grid item sm={0} md={2}></Grid>
          <Grid item sm={12} md={8} container justifyContent="center" >
            <Typography sx={{fontWeight: 300, textAlign: "center"}} gutterBottom>
              Below is a small sample of the technologies I work with on a regular basis. If there's one you're looking for but don't see, please ask. After more than 20 years building software, there's a good chance I've encountered it.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        
        <SkillCard title="React">
          <StaticImage src="../images/logos/react.svg" alt="react" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>
        
        <SkillCard title="Angular" delay={1}>
          <StaticImage src="../images/logos/angular.svg" alt="angular" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title="Typescript" delay={2}>
          <StaticImage src="../images/logos/typescript.svg" alt="typescript" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        {/* <SkillCard title="Gatsby" delay={3}>
          <StaticImage src="../images/logos/gatsby.svg" alt="gatsby" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard> */}

        <SkillCard title="React Native" delay={4}>
          <StaticImage src="../images/logos/react.svg" alt="react native" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>
        
        <SkillCard title="Next.js" delay={5}>
          {/* <StaticImage src="../images/logos/node.svg" alt="node" height={imgHeight} objectFit="contain" width={imgWidth} /> */}
          <StaticImage src="../images/logos/next-js.svg" alt="Next.js" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title=".NET Core" delay={6}>
          <StaticImage src="../images/logos/netcore.svg" alt=".NET Core" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title="SQL Server" delay={7}>
          <StaticImage src="../images/logos/sql-server.svg" alt="SQL Server" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title="PostgreSQL" delay={9} textLeftAdjust="-0.6375rem">
          <StaticImage src="../images/logos/postgresql.svg" alt="PostgreSQL" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title="AWS" delay={10}>
          <StaticImage src="../images/logos/aws.svg" alt="AWS" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title="Azure" delay={10}>
          <StaticImage src="../images/logos/azure.svg" alt="Azure" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title="GCE" delay={11}>
          <StaticImage src="../images/logos/google-cloud.svg" alt="Google Compute Engine" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>

        <SkillCard title="Firebase" delay={8}>
          <StaticImage src="../images/logos/firebase.svg" alt="Firebase" height={imgHeight} objectFit="contain" width={imgWidth} />
        </SkillCard>


      </Grid>
    </Grid>
  );

};

export default SkillsSection;