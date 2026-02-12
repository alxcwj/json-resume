import Section from './Section';
import Experience from './Experience';

const ResearchExperience = ({ work }) => {
  if (!work) {
    return null;
  }

  // Filter work entries that are research-related
  const researchWork = work.filter((w) => {
    const positionLower = (w.position || '').toLowerCase();
    
    // Explicitly include only "research" positions
    return positionLower.includes('research');
  });

  if (researchWork.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Research Experience">
        {researchWork.map((w, key) => {
          return (
            <Experience
              title={w.position}
              subTitle={w.name}
              startDate={w.startDate}
              endDate={w.endDate}
              summary={w.summary}
              highlights={w.highlights}
              key={key}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default ResearchExperience;
