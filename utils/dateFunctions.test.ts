import { formatDate } from './dateFunctions';

describe('formatDate', () => {
  test('formats a valid timestamp correctly', () => {
    const timestamp = 1609459200; // January 1, 2021, 00:00:00 UTC
    expect(formatDate(timestamp)).toBe('01 January 2021');
  });

  test('handles a different valid timestamp', () => {
    const timestamp = 1625097600; // July 1, 2021, 00:00:00 UTC
    expect(formatDate(timestamp)).toBe('01 July 2021');
  });
});
