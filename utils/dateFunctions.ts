import { format, fromUnixTime, isValid } from 'date-fns';

export const formatDate = (timestamp: number): string => {
  try {
    const date = fromUnixTime(timestamp);
    if (!isValid(date)) {
      return '';
    }
    return format(date, 'dd MMMM yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};
