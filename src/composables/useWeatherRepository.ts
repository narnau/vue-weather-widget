import { ref, onMounted, Ref } from "vue";
import { fetchOneCallAPIData } from "@/api/weatherRepository";
import { WeatherData } from "@/lib/types";

const useWeatherRepository = (
  lon: string,
  lat: string,
  units: string
): { weatherData: Ref<WeatherData>; getWeatherData: () => void } => {
  const weatherData = ref({} as WeatherData);

  const getWeatherData = async () => {
    try {
      weatherData.value = await fetchOneCallAPIData(lon, lat, units);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  onMounted(getWeatherData);

  return { weatherData, getWeatherData };
};

export default useWeatherRepository;
