import { differenceInCalendarMonths } from "date-fns";
import { pluralize } from "../pluralize/pluralize";

/**
 * Returns the cumulative time duration between multiple dates as a string in the "X yr(s) X mo(s)" format
 *
 * @param dates An array of start and end dates
 * @param minimumLabel Text returned if the duration is shorter than one month
 */

export const duration = (
  dates: {
    start: Date;
    end: Date;
  }[],
  format: "short" | "iso8601" = "short",
  minimumLabel = ""
) => {
  const durationInMonths = dates.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      differenceInCalendarMonths(currentValue.end, currentValue.start)
    );
  }, 0);
  const years = Math.floor(durationInMonths / 12);
  const months = durationInMonths % 12;
  const displayMinimumLabel = years + months <= 0;

  if (format === "short") {
    const yearsFormatted = years >= 1 ? pluralize(`${years} year`, years) : "";
    const monthsFormatted =
      months >= 1 ? pluralize(`${months} month`, months) : "";

    return !displayMinimumLabel
      ? `${yearsFormatted}${
          yearsFormatted && monthsFormatted && ", "
        }${monthsFormatted}`
      : minimumLabel;
  }

  if (format === "iso8601") {
    const yearsFormatted = years >= 1 ? `${years}Y` : "";
    const monthsFormatted = months >= 1 ? `${months}M` : "";

    return !displayMinimumLabel
      ? `P${yearsFormatted}${monthsFormatted}`
      : minimumLabel;
  }

  return "";
};
