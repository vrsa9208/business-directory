import { format } from "date-fns";

export const mapPersonRequest = (person) => {
  const { joinDate, ...mappedPerson } = person;
  return { ...mappedPerson, join_date: format(joinDate, "yyyy-MM-dd") };
};

export const mapPersonModel = (person) => {
  const joinDate = person.join_date.replace(/-/g, "/");
  return {
    initialName: person.name,
    initialEmail: person.email,
    initialRole: person.role,
    initialPhone: person.phone,
    initialJoinDate: new Date(joinDate),
  };
};
