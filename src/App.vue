<template>
  <WeatherWidget
    lon="2.159"
    lat="41.3888"
    units="metric"
    location="Barcelona, Spain"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WeatherWidget from "./components/WeatherWidget.vue";

export default defineComponent({
  name: "App",
  components: {
    WeatherWidget,
  },
});
</script>

<style lang="scss"></style>
