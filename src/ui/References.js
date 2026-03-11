import Section from './Section';
import List from './List';

const References = ({ references }) => {
  if (!references) {
    return null;
  }

  const referenceItems = references
    .map((reference) => {
      const parts = [reference.name];

      if (reference.role) {
        parts.push(`(${reference.role})`);
      }

      const label = parts.filter(Boolean).join(' ');

      if (reference.contact) {
        return `${label}: ${reference.contact}`;
      }

      return label;
    })
    .filter(Boolean);

  if (referenceItems.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="References">
        <div className="secondary">
          <List items={referenceItems} />
        </div>
      </Section>
    </div>
  );
};

export default References;
