import { pluralize } from "@/utils/pluralize/pluralize";
import { differenceInCalendarMonths } from "date-fns";

/**
 * Returns the time duration between two dates as a string in the "X yr(s) X mo(s)" format
 *
 * @param startDate Must be anterior to endDate
 * @param endDate Must be posterior to startDate
 * @param minimumLabel Text returned if the duration is shorter than one month
 */

export const duration = (
  startDate: Date,
  endDate: Date,
  format: "short" | "iso8601" = "short",
  minimumLabel = ""
): string => {
  if (startDate <= endDate) {
    const durationInMonths = differenceInCalendarMonths(endDate, startDate);
    const years = Math.floor(durationInMonths / 12);
    const months = durationInMonths % 12;
    const displayMinimumLabel = years + months <= 0;

    if (format === "short") {
      const yearsFormatted = years >= 1 ? pluralize(`${years} yr`, years) : "";
      const monthsFormatted =
        months >= 1 ? pluralize(`${months} mo`, months) : "";

      return !displayMinimumLabel
        ? `${yearsFormatted}${
            yearsFormatted && monthsFormatted && " "
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
  }

  throw new Error("startDate must be anterior to endDate");
};
