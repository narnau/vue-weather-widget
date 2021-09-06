<template>
  <div class="weather-tile">
    <div class="week-day">{{ weekDay }}</div>
    <WeatherIcon :weatherConditionId="weatherConditionId" class="icon" />
    <div class="max-temp">{{ maxTemp }}°C</div>
    <div class="min-temp">{{ minTemp }}°C</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  getJavascriptDate,
  getWeekDay,
  isSameDate,
} from "../lib/dateUtilities";
import WeatherIcon from "./WeatherIcon.vue";

export default defineComponent({
  name: "BasicWeatherTile",
  props: ["weatherConditionId", "unixDate", "maxTemp", "minTemp"],
  components: {
    WeatherIcon,
  },
  setup(props) {
    const tileDate = getJavascriptDate(props.unixDate);
    return {
      weekDay: isSameDate(tileDate, new Date())
        ? "Today"
        : getWeekDay(tileDate),
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";

.weather-tile {
  @include respond-mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  > div {
    @include respond-mobile {
      margin: auto 0;
    }
  }
  .week-day {
    color: white;
    font-size: 15px;

    @include respond-mobile {
      min-width: 79px;
      text-align: left;
    }
  }

  .max-temp {
    color: #ff0000;
    font-size: 12px;
    line-height: 14px;
    margin-top: 3px;

    @include respond-mobile {
      margin: auto 0;
    }
  }

  .min-temp {
    color: #00ffff;
    font-size: 12px;
    line-height: 14px;
  }

  .icon {
    width: 50px;
    min-height: 60px;
    margin-top: 8px;

    @include respond-mobile {
      width: 50px;
      height: 50px;
      margin-top: 0px;
      min-height: 0px;
    }
  }
}
</style>
