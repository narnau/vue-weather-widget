import { TimeOfDay } from "./types";

export const getWeekDay = (date: Date): string => {
  const weekDay: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekDay[date.getDay()];
};

export const getJavascriptDate = (unixDate: number): Date => {
  return new Date(unixDate * 1000);
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  const date1Year = date1.getFullYear();
  const date2Year = date2.getFullYear();

  const date1Month = date1.getMonth();
  const date2Month = date2.getMonth();

  const date1Day = date1.getDate();
  const date2Day = date2.getDate();

  return (
    date1Month === date2Month &&
    date1Day === date2Day &&
    date1Year === date2Year
  );
};

export const getTimeOfDay = (
  currentTime: number,
  sunsetTime: number
): TimeOfDay => {
  if (currentTime >= sunsetTime) return TimeOfDay.Night;
  else return TimeOfDay.Day;
};
