import Section from './Section';
import List from './List';

const Skills = ({ skills }) => {
  if (!skills) {
    return null;
  }

  const skillItems = skills
    .map((skill) => {
      const keywords = (skill.keywords || []).join(', ');
      return keywords ? `${skill.name}: ${keywords}` : skill.name;
    })
    .filter(Boolean);

  if (skillItems.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Skills">
        <div className="secondary">
          <List items={skillItems} />
        </div>
      </Section>
    </div>
  );
};

export default Skills;
