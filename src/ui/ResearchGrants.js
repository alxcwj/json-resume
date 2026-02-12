import Section from './Section';
import Experience from './Experience';

const ResearchGrants = ({ awards }) => {
  if (!awards) {
    return null;
  }

  // Filter awards that are research grants/opportunities
  const grants = awards.filter((award) => {
    const titleLower = (award.title || '').toLowerCase();
    return (
      titleLower.includes('research opportunity') ||
      titleLower.includes('research grant') ||
      titleLower.includes('grant')
    ) && !titleLower.includes('fellowship') && !titleLower.includes('scholars program');
  });

  if (grants.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Research Grants">
        {grants.map((award, key) => {
          return (
            <Experience
              title={award.title}
              subTitle={award.awarder}
              date={award.date}
              key={key}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default ResearchGrants;
