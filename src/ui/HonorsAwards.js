import Section from './Section';
import Experience from './Experience';

const HonorsAwards = ({ awards }) => {
  if (!awards) {
    return null;
  }

  // Filter awards that are honors/awards/prizes/scholarships
  const honorsAndAwards = awards.filter((award) => {
    const titleLower = (award.title || '').toLowerCase();
    return (
      !titleLower.includes('fellowship') &&
      !titleLower.includes('scholars program') &&
      !titleLower.includes('research opportunity') &&
      !titleLower.includes('research grant')
    );
  });

  if (honorsAndAwards.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Honors & Awards">
        {honorsAndAwards.map((award, key) => {
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

export default HonorsAwards;
