import styled from 'styled-components';

const Section = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 18px;
  display: flow-root;
  break-inside: auto;
  page-break-inside: auto;

  h2 {
    margin: 0;
    padding: 0;
    margin-bottom: 3px;
    font-weight: 600;
    break-after: avoid;
    page-break-after: avoid;
  }

  hr {
    margin: 0;
    padding: 0;
    margin-top: 7px;
    margin-bottom: 3px;
    break-after: avoid;
    page-break-after: avoid;
  }
`;

const Container = styled.div`
  margin: 0 8px;
`;

const SectionComponent = ({ children, title }) => {
  return (
    <Section>
      {title && (
        <>
          <h2>{title}</h2>
          <hr />
        </>
      )}
      <Container>{children}</Container>
    </Section>
  );
};

export default SectionComponent;
