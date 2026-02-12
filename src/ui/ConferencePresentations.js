import Section from './Section';
import Experience from './Experience';

const ConferencePresentations = ({ projects }) => {
  if (!projects) {
    return null;
  }

  // Find the "Conference Presentations" project entry
  const confPresentations = projects.find(
    (project) => project.name && project.name.toLowerCase().includes('conference presentation')
  );

  if (!confPresentations || !confPresentations.highlights) {
    return null;
  }

  return (
    <div>
      <Section title="Conference Presentations">
        <Experience highlights={confPresentations.highlights} />
      </Section>
    </div>
  );
};

export default ConferencePresentations;
