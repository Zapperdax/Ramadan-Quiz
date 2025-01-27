export const epochToDate = (epochTime: number) => {
  const epochMilliseconds = epochTime * 1000; // Convert to milliseconds
  const date = new Date(epochMilliseconds);
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const showExamCard = (
  startDate: number,
  endDate: number,
  user: any,
  label: string
) => {
  label = label.replace(/\s+/g, "-").toLowerCase();
  if (
    Date.now() >= startDate * 1000 &&
    Date.now() <= endDate * 1000 &&
    user?.marks?.[label].status === 0
  ) {
    return true;
  } else {
    return false;
  }
};