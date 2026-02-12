import Section from './Section';
import Experience from './Experience';

const ProfessionalAffiliations = ({ projects }) => {
  if (!projects) {
    return null;
  }

  // Find the "Professional Affiliations" project entry
  const profAffiliations = projects.find(
    (project) => project.name && project.name.toLowerCase().includes('professional affiliation')
  );

  if (!profAffiliations || !profAffiliations.highlights) {
    return null;
  }

  return (
    <div>
      <Section title="Professional Affiliations">
        <Experience highlights={profAffiliations.highlights} />
      </Section>
    </div>
  );
};

export default ProfessionalAffiliations;
