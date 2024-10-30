export const formatTimeTo12Hour = (time24: string): string => {
  const [hour, minute] = time24.split(':').map(Number);
  const hour12 = hour % 12 || 12;
  const period = hour < 12 ? 'AM' : 'PM';
  return `${hour12}:${String(minute).padStart(2, '0')} ${period}`;
};
