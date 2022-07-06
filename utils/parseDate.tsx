const months = [
  undefined,
  "January ",
  "February ",
  "March ",
  "April ",
  "May ",
  "June ",
  "July ",
  "August ",
  "September ",
  "October ",
  "November ",
  "December ",
];

export default function parseReleaseDate(rawDate: string) {
  let dateArr = rawDate.split("-");
  let month = months[parseInt(dateArr[1])];
  let date = month + parseInt(dateArr[2]).toString() + ", " + dateArr[0];
  return date;
}
