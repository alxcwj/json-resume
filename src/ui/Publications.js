import Section from './Section';
import Experience from './Experience';

const Publications = ({ publications }) => {
  if (!publications) {
    return null;
  }

  return (
    <div>
      <Section title="Publications">
        {publications.map((p, key) => {
          // Use status if available, otherwise use releaseDate
          const dateOrStatus = p.status || p.releaseDate;
          
          return (
            <Experience
              title={p.name}
              subTitle={p.publisher}
              date={dateOrStatus}
              summary={p.summary}
              key={key}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default Publications;
