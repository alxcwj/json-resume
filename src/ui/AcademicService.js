import Section from './Section';
import Experience from './Experience';

const AcademicService = ({ work }) => {
  if (!work) {
    return null;
  }

  // Filter work entries that are academic service-related
  const serviceWork = work.filter((w) => {
    const positionLower = (w.position || '').toLowerCase();
    const summaryLower = (w.summary || '').toLowerCase();
    
    return (
      positionLower.includes('service') ||
      positionLower.includes('academic service') ||
      summaryLower.includes('academic service')
    );
  });

  if (serviceWork.length === 0) {
    return null;
  }

  return (
    <div>
      <Section title="Academic Service">
        {serviceWork.map((w, key) => {
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

export default AcademicService;
