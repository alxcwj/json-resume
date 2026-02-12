import Section from './Section';
import styled from 'styled-components';

const List = styled.div`
  font-size: 1.4rem;
`;

const ResearchInterests = ({ interests }) => {
  if (!interests) {
    return null;
  }

  // Find the "Research Interests" interest entry
  const researchInterests = interests.find(
    (interest) => interest.name && interest.name.toLowerCase().includes('research interest')
  );

  if (!researchInterests) {
    return null;
  }

  return (
    <div>
      <Section title="Research Interests">
        <List>
          <div className="secondary">{researchInterests.keywords.join(', ')}</div>
        </List>
      </Section>
    </div>
  );
};

export default ResearchInterests;
