import styled from 'styled-components';
import Section from './Section';
import MonthYearDate from './MonthYearDate';

const Container = styled.div`
  margin-bottom: 10px;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.45rem;
  margin-bottom: 3px;
`;

const ConferenceInfo = styled.div`
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 3px;
`;

const ConferencePresentations = ({ projects }) => {
  if (!projects) {
    return null;
  }

  // Find the "Conference Presentations" project entry
  const confPresentations = projects.find(
    (project) => project.name && project.name.toLowerCase().includes('conference presentation')
  );

  if (!confPresentations) {
    return null;
  }

  // Handle both old string format and new structured format
  let presentations = [];
  
  if (confPresentations.presentations) {
    // New structured format
    presentations = confPresentations.presentations;
  } else if (confPresentations.highlights) {
    // Old string format - parse it
    presentations = confPresentations.highlights.map(highlight => {
      // Pattern: "Jan 2026: Title. — Conference | Location"
      const match = highlight.match(/^([^:]+):\s*([^.]+)\.\s*—\s*([^|]+)\|\s*(.+)$/);
      
      if (match) {
        return {
          date: match[1].trim(),
          title: match[2].trim(),
          conference: match[3].trim(),
          location: match[4].trim()
        };
      }
      
      // Fallback if pattern doesn't match
      return {
        title: highlight,
        date: '',
        conference: '',
        location: ''
      };
    });
  }

  if (presentations.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Conference Presentations">
        {presentations.map((presentation, key) => (
          <Container key={key}>
            <Meta>
              <Title>{presentation.title}</Title>
              <div className="secondary">
                <MonthYearDate date={presentation.date} />
              </div>
            </Meta>
            <ConferenceInfo>
              {presentation.conference}
              {presentation.location && ` | ${presentation.location}`}
            </ConferenceInfo>
          </Container>
        ))}
      </Section>
    </div>
  );
};

export default ConferencePresentations;
