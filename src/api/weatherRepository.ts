import { WeatherData } from "@/lib/types";

const appId = process.env.VUE_APP_OPEN_WEATHER_API_ID;

export const fetchOneCallAPIData = async (
  lon: string,
  lat: string,
  units: string
): Promise<WeatherData> => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&units=${units}&appid=${appId}`
  );
  if (!data.ok) {
    throw Error("no data available");
  }
  return await data.json();
};
