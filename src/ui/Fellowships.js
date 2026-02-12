import Section from './Section';
import Experience from './Experience';

const Fellowships = ({ awards }) => {
  if (!awards) {
    return null;
  }

  // Filter awards that are fellowships
  const fellowships = awards.filter((award) => {
    const titleLower = (award.title || '').toLowerCase();
    return titleLower.includes('fellowship') || titleLower.includes('scholars program');
  });

  if (fellowships.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Fellowships">
        {fellowships.map((award, key) => {
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

export default Fellowships;
