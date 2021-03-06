import React from 'react';
import SEO from 'components/seo';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import LandingSection from '../LandingSection/LandingSection';
import AboutSection from '../AboutSection/AboutSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Footer from '../Footer/Footer';

const IndexPage = () => (
  <div>
    <SEO title="Eric Jae-Min Joo" />
    <GlobalStyle />
    <LandingSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <Footer />
  </div>
);

export default IndexPage;
