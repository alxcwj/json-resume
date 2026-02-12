import styled from 'styled-components';
import Hero from './Hero';
import Summary from './Summary';
import Education from './Education';
import ResearchInterests from './ResearchInterests';
import Publications from './Publications';
import Fellowships from './Fellowships';
import ResearchGrants from './ResearchGrants';
import HonorsAwards from './HonorsAwards';
import ConferencePresentations from './ConferencePresentations';
import ResearchExperience from './ResearchExperience';
import TeachingMentorship from './TeachingMentorship';
import AcademicService from './AcademicService';
import Skills from './Skills';
import ProfessionalAffiliations from './ProfessionalAffiliations';
import References from './References';

const Layout = styled.div`
  max-width: 660px;
  margin: 0 auto;
  line-height: calc(1ex / 0.32);
  margin-bottom: 40px;
`;

const Resume = ({ resume }) => {
  return (
    <Layout>
      <Hero basics={resume.basics} />
      <Summary basics={resume.basics} />
      <Education education={resume.education} />
      <ResearchInterests interests={resume.interests} />
      <Publications publications={resume.publications} />
      <Fellowships awards={resume.awards} />
      <ResearchGrants awards={resume.awards} />
      <HonorsAwards awards={resume.awards} />
      <ConferencePresentations projects={resume.projects} />
      <ResearchExperience work={resume.work} />
      <TeachingMentorship work={resume.work} />
      <AcademicService work={resume.work} />
      <Skills skills={resume.skills} />
      <ProfessionalAffiliations projects={resume.projects} />
      <References references={resume.references} />
    </Layout>
  );
};

export default Resume;
