export function weekday(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-EN", { weekday: "long" });
}

export function dayAndMonth(dateStr) {
  const date = new Date(dateStr);
  const day = date.toLocaleDateString("en-EN", { day: "2-digit" });
  const month = date.toLocaleDateString("en-EN", { month: "long" });
  return `${day}. ${month}`;
}
