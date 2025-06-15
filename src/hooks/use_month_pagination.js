import { useState } from "react";

export function useMonthPagination() {
  const [date, setDate] = useState(new Date());

  const today = new Date();
  const minDate = new Date();
  minDate.setFullYear(today.getFullYear() - 3);
  const maxDate = new Date(today);
  maxDate.setMonth(today.getMonth() + 1);

  function clampAndSetDate(newDate) {
    if (newDate < minDate) {
      setDate(minDate);
    } else if (newDate > maxDate) {
      setDate(maxDate);
    } else {
      setDate(newDate);
    }
  }

  function goToCurrentMonth() {
    setDate(new Date());
  }

  function goToPreviousMonth() {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    clampAndSetDate(newDate);
  }

  function goToNextMonth() {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    clampAndSetDate(newDate);
  }

  function goToPreviousYear() {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() - 1);
    clampAndSetDate(newDate);
  }

  function goToNextYear() {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + 1);
    clampAndSetDate(newDate);
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
