import { useState } from "react";

export function useMonthPagination() {
  const [date, setDate] = useState(new Date());

  function goToCurrentMonth() {
    setDate(new Date());
  }

  function goToPreviousMonth() {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  }

  function goToNextMonth() {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  }

  function goToPreviousYear() {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() - 1);
    setDate(newDate);
  }

  function goToNextYear() {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + 1);
    setDate(newDate);
  }

  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });

  return {
    date,
    year,
    month,
    goToCurrentMonth,
    goToPreviousMonth,
    goToNextMonth,
    goToPreviousYear,
    goToNextYear,
  };
}
