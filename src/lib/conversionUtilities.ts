import { TimeOfDay } from "./types";

// Divide the angle by 22.5 because 360deg/16 directions = 22.5deg/direction change.
// Add .5 so that when you truncate the value you can break the 'tie' between the change threshold.
// Truncate the value using integer division (so there is no rounding).
// Directly index into the array and print the value (mod 16).
// from: https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words
export const degToCompass = (windDegree: number): string => {
  const arrayPosition = Math.floor(windDegree / 22.5 + 0.5) % 16;
  const windDirections = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return windDirections[arrayPosition];
};

export const mpsToKmph = (mpsValue: number): number => {
  return Math.round(3.6 * mpsValue * 100) / 100;
};

export const getWeatherIconName = (
  weatherIconId: number,
  timeOfDay: TimeOfDay = TimeOfDay.Day
): string => {
  const folderName = "/weatherIcons/";

  if (weatherIconId >= 200 && weatherIconId <= 232) {
    return `${folderName}thunderstorm.svg`;
  }

  if (weatherIconId >= 500 && weatherIconId <= 504) {
    return `${folderName}moderaterain${
      timeOfDay == TimeOfDay.Day ? "d" : "n"
    }.svg`;
  }

  if (weatherIconId == 511 || (weatherIconId >= 600 && weatherIconId <= 622)) {
    return `${folderName}snow.svg`;
  }

  if (
    (weatherIconId >= 300 && weatherIconId <= 321) ||
    (weatherIconId >= 520 && weatherIconId <= 531)
  ) {
    return `${folderName}heavyrain.svg`;
  }

  if (weatherIconId >= 701 && weatherIconId <= 781) {
    return `${folderName}mist.svg`;
  }

  if (weatherIconId == 800) {
    return `${folderName}clearsky${timeOfDay == TimeOfDay.Day ? "d" : "n"}.svg`;
  }

  if (weatherIconId == 801) {
    return `${folderName}fewclouds${
      timeOfDay == TimeOfDay.Day ? "d" : "n"
    }.svg`;
  }

  if (weatherIconId >= 802 && weatherIconId <= 804) {
    return `${folderName}clouds.svg`;
  }

  return `${folderName}clearsky${timeOfDay == TimeOfDay.Day ? "d" : "n"}.svg`;
};
