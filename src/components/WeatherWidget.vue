<template>
  <div class="container" v-if="data.current">
    <div class="current-weather">
      <WeatherIcon
        :weatherConditionId="data.current.weather[0].id"
        :timeOfDay="timeOfDay"
        class="icon"
      />
      <div class="info">
        <div class="location">{{ location }}</div>
        <div class="temp">{{ data.current.temp }}°</div>
        <div class="humidity">Humidity: {{ data.current.humidity }}%</div>
        <div class="uvi">UVI: {{ data.current.uvi }}%</div>
        <div class="wind">
          Wind:
          {{ wind.direction }}
          {{ wind.speed }}kmh
        </div>
      </div>
    </div>
    <div class="forecast" v-if="forecastItems">
      <BasicWeatherTile
        v-for="item in forecastItems"
        v-bind:key="item"
        :maxTemp="item.temp.max"
        :minTemp="item.temp.min"
        :unixDate="item.dt"
        :weatherConditionId="item.weather[0].id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import WeatherIcon from "./WeatherIcon.vue";
import BasicWeatherTile from "./BasicWeatherTile.vue";
import { degToCompass, mpsToKmph } from "../lib/conversionUtilities";
import useWeatherRepository from "../composables/useWeatherRepository";
import { getTimeOfDay } from "@/lib/dateUtilities";

export default defineComponent({
  name: "WeatherWidget",
  props: ["lon", "lat", "units", "location"],
  components: {
    WeatherIcon,
    BasicWeatherTile,
  },
  setup(props) {
    const { weatherData } = useWeatherRepository(
      props.lon,
      props.lat,
      props.units
    );

    const forecastItems = computed(() => {
      return weatherData.value.daily.slice(0, 6);
    });

    const timeOfDay = computed(() => {
      return getTimeOfDay(
        weatherData.value.current.dt,
        weatherData.value.current.sunset
      );
    });

    const wind = computed(() => {
      return {
        direction: degToCompass(weatherData.value.current.wind_deg),
        speed: mpsToKmph(weatherData.value.current.wind_speed),
      };
    });

    return { data: weatherData, forecastItems, wind, timeOfDay };
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.container {
  font-family: "Roboto", sans-serif;
  text-align: center;
  max-width: 900px;
  height: 311px;
  background: linear-gradient(
      180deg,
      #0668c2 0%,
      #1c0168 100%,
      rgba(68, 12, 158, 0) 100%
    ),
    linear-gradient(0deg, #c4c4c4, #c4c4c4);
  box-shadow: 0px 4px 4px 0px #00000040 inset;
  border-radius: 20px;
  padding: 19px 37px 19px 29px;
  box-sizing: border-box;

  @include respond-mobile {
    height: 634px;
    width: 375px;
    padding: 20px 26px 23px 29px;
  }

  .forecast {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    padding: 24px 0px 0px 0px;

    @include respond-mobile {
      flex-direction: column;
      gap: 24px;
      padding: 49px 0px 0px 2px;
    }
  }

  .current-weather {
    color: white;
    flex-direction: row;
    display: flex;
    padding: 0 0 0 3px;

    .icon {
      height: 117px;
      width: 117px;
      padding: 0px 25px 0px 3px;

      @include respond-mobile {
        height: 93px;
        width: 93px;
        padding: 5px 20px 0px 0px;
      }
    }

    .info {
      text-align: left;

      .location {
        font-size: 25px;
        line-height: 29px;

        @include respond-mobile {
          font-size: 22px;
          line-height: 25.78px;
        }
      }
      .temp {
        font-size: 20px;
        line-height: 23.44px;
      }

      .humidity .wind .uvi {
        font-size: 15px;
        line-height: 17.58px;
      }
    }
  }
}
</style>
