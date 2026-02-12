import styled from 'styled-components';

const Text = styled.div`
  font-style: italic;
  font-size: 1.4rem;
  white-space: nowrap;
`;

const MonthYearDate = ({ date }) => {
  if (!date) {
    return <Text>Present</Text>;
  }

  // If it already looks like "Month Year" format, convert to short month
  if (/^[A-Za-z]+\s+\d{4}$/.test(date.trim())) {
    const monthMap = {
      'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 
      'April': 'Apr', 'May': 'May', 'June': 'Jun',
      'July': 'Jul', 'August': 'Aug', 'September': 'Sep',
      'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
    };
    
    const parts = date.trim().split(' ');
    if (parts.length === 2) {
      const shortMonth = monthMap[parts[0]] || parts[0];
      return <Text>{`${shortMonth} ${parts[1]}`}</Text>;
    }
  }

  const fullDate = new Date(date);

  // Format as "Month Year" (e.g., "Jan 2021")
  const options = { year: 'numeric', month: 'short' };
  const formattedDate = fullDate.toLocaleDateString('en-US', options);

  return <Text>{formattedDate ?? 'Present'}</Text>;
};

export default MonthYearDate;
