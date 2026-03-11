import styled from 'styled-components';
import Section from './Section';

const PublicationItem = styled.p`
  margin: 0 0 3px;
  padding-left: 2em;
  text-indent: -2em;
  break-inside: avoid;
  page-break-inside: avoid;
`;

const normalizeStatus = (status) => (status || '').toLowerCase().trim();

const formatPublication = (publication, showStatus = false) => {
  const dateOrStatus = showStatus ? publication.status : publication.releaseDate;
  const details = [publication.name, publication.publisher, dateOrStatus]
    .filter(Boolean)
    .join(' ');

  if (!publication.summary) {
    return details;
  }

  return details ? `${details}. ${publication.summary}` : publication.summary;
};

const renderPublicationList = (items, showStatus = false) =>
  items.map((p, key) => {
    return (
      <PublicationItem key={`${p.name || 'publication'}-${key}`}>
        {formatPublication(p, showStatus)}
      </PublicationItem>
    );
  });

const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) {
    return null;
  }

  const published = publications.filter((p) => normalizeStatus(p.status) === 'published.');
  const worksInProgress = publications.filter((p) => {
    const status = normalizeStatus(p.status);
    return status === 'under review.' || status === 'in preparation.';
  });
  const other = publications.filter((p) => {
    const status = normalizeStatus(p.status);
    return status !== 'published.' && status !== 'under review.' && status !== 'in preparation.';
  });

  return (
    <div>
      {published.length > 0 && (
        <Section title="Peer-reviewed Publications">
          <div className="secondary">{renderPublicationList(published)}</div>
        </Section>
      )}

      {worksInProgress.length > 0 && (
        <Section title="Works-in-progress">
          <div className="secondary">{renderPublicationList(worksInProgress, true)}</div>
        </Section>
      )}

      {other.length > 0 && (
        <Section title="Other Publications">
          <div className="secondary">{renderPublicationList(other)}</div>
        </Section>
      )}
    </div>
  );
};

export default Publications;
