<template>
  <img :src="iconUrl" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getWeatherIconName } from "../lib/conversionUtilities";

export default defineComponent({
  name: "WeatherIcon",
  props: ["weatherConditionId", "timeOfDay"],
  setup(props) {
    return {
      iconUrl: getWeatherIconName(props.weatherConditionId, props.timeOfDay),
    };
  },
});
</script>

<style scoped lang="scss"></style>
