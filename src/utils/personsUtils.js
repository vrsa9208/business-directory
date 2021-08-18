import { format } from "date-fns";

export const mapPersonRequest = (person) => {
  const { joinDate, ...mappedPerson } = person;
  return { ...mappedPerson, join_date: format(joinDate, "yyyy-MM-dd") };
};
