import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';
import Languages from 'components/Languages';
import Interests from 'components/Interests';
import Awards from 'components/Awards';
import Certifications from 'components/Certifications';


const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Certifications />
    <hr />
    <Interests />
    <hr />
    <Awards />
    <hr />
    <Languages />
  </Layout>
);

export default ResumePage;
