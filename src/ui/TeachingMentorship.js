import Section from './Section';
import Experience from './Experience';

const TeachingMentorship = ({ work }) => {
  if (!work) {
    return null;
  }

  // Filter work entries that are teaching/mentorship-related
  const teachingWork = work.filter((w) => {
    const positionLower = (w.position || '').toLowerCase();
    const summaryLower = (w.summary || '').toLowerCase();
    const highlightsText = (w.highlights || []).join(' ').toLowerCase();
    
    return (
      positionLower.includes('teaching') ||
      positionLower.includes('mentor') ||
      summaryLower.includes('teaching') ||
      summaryLower.includes('mentor') ||
      highlightsText.includes('teaching') ||
      highlightsText.includes(' ta ') ||
      highlightsText.includes('mentor') ||
      highlightsText.includes('supervisor')
    );
  });

  if (teachingWork.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Teaching & Mentorship">
        {teachingWork.map((w, key) => {
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

export default TeachingMentorship;
