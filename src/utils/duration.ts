import { differenceInCalendarMonths } from "date-fns";
import pluralize from "utils/pluralize";

const duration = (
  startDate: Date,
  endDate: Date,
  minimumLabel?: string
): string => {
  if (startDate <= endDate) {
    const durationInMonths = differenceInCalendarMonths(endDate, startDate);
    const years = Math.floor(durationInMonths / 12);
    const months = durationInMonths % 12;
    const yearsFormated = years >= 1 ? pluralize(`${years} yr`, years) : "";
    const monthsFormated =
      months >= 1
        ? pluralize(`${months} mo`, months)
        : !yearsFormated && minimumLabel
        ? minimumLabel
        : "";

    return (
      yearsFormated + (yearsFormated && monthsFormated && " ") + monthsFormated
    );
  } else {
    throw new Error("startDate must be anterior to endDate");
  }
};

export default duration;
