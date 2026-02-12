import styled from 'styled-components';

const Text = styled.div`
  font-style: italic;
  font-size: 1.4rem;
`;

const MonthYearDate = ({ date }) => {
  if (!date) {
    return <Text>Present</Text>;
  }

  // If it already looks like "Month Year" format, return as-is
  if (/^[A-Za-z]+\s+\d{4}$/.test(date.trim())) {
    return <Text>{date}</Text>;
  }

  const fullDate = new Date(date);

  // Format as "Month Year" (e.g., "January 2021")
  const options = { year: 'numeric', month: 'long' };
  const formattedDate = fullDate.toLocaleDateString('en-US', options);

  return <Text>{formattedDate ?? 'Present'}</Text>;
};

export default MonthYearDate;
