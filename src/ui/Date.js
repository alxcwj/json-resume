import styled from 'styled-components';

const Text = styled.div`
  font-style: italic;
  font-size: 1.4rem;
  white-space: nowrap;
`;

const DateComponent = ({ date }) => {
  if (!date) {
    return <Text>Present</Text>;
  }

  // If it's a status string (e.g., "Under review", "In preparation"), display as-is
  if (isNaN(Date.parse(date)) && !(/^\d{4}$/).test(date)) {
    return <Text>{date}</Text>;
  }

  // If date is just a year (4 digits), display it as-is
  if (/^\d{4}$/.test(date)) {
    return <Text>{date}</Text>;
  }

  const fullDate = new Date(date);

  // Default to showing year only
  const options = { year: 'numeric' };
  const formattedDate = fullDate.toLocaleDateString('en-US', options);

  return <Text>{formattedDate ?? 'Present'}</Text>;
};

export default DateComponent;
