export function getCurrentDate() {
  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

  return `${hours < 10 ? `0${hours}` : `${hours}`}:${
    minutes < 10 ? `0${minutes}` : `${minutes} `
  }`;
}
