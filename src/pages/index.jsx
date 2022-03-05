import * as React from 'react';
import { Box, Container} from '@mui/material';
import { styled } from "@mui/system";
import Header from "../sections/header";
import AboutSection from '../sections/about';
import SkillsSection from "../sections/skills";
import ServicesSection from "../sections/services";
import ExperienceSection from "../sections/experience";
import PortfolioSection from "../sections/portfolio";
import ContactSection from "../sections/contact";
import "aos/dist/aos.css";
import "../common-styles.css";
import AOS from "aos";


const SectionDivider = styled("hr")(({theme}) => ({
  width: `calc(100% - ${theme.spacing(12)}px)`,
  margin: theme.spacing(6),
}));

export default function Index() {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container maxWidth={false}>
      <Box>
        <Box sx={{py: 4}}>
          <Header />
        </Box>
        <Box id="about" sx={{p: 4}} className="aos-init" data-aos="fade-in">
          <AboutSection/>
        </Box>
        <SectionDivider />
        
        <Box id="skills" sx={{p: 4}}>
          <SkillsSection />
        </Box>
        <SectionDivider />

        <Box id="services" sx={{p: 4}}>
          <ServicesSection />
        </Box>
        <SectionDivider />
        
        <Box id="experience">
          <ExperienceSection />
        </Box>
        <SectionDivider />

        <Box id="portfolio">
          <PortfolioSection />
        </Box>
        <SectionDivider />

        <Box id="contact">
          <ContactSection />
        </Box>
        
      </Box>
    </Container>
  );
}
