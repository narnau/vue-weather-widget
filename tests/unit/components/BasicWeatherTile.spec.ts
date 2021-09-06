import { shallowMount } from "@vue/test-utils";
import BasicWeatherTile from "@/components/BasicWeatherTile.vue";

describe("BasicWeatherTile.vue", () => {
  it("renders props.maxTemp when passed", () => {
    const maxTemp = "18";
    const wrapper = shallowMount(BasicWeatherTile, {
      props: { maxTemp },
    });
    expect(wrapper.text()).toMatch(maxTemp);
  });

  it("renders props.minTemp when passed", () => {
    const minTemp = "0";
    const wrapper = shallowMount(BasicWeatherTile, {
      props: { minTemp },
    });
    expect(wrapper.text()).toMatch(minTemp);
  });

  it("renders maxTemp with °C literal", () => {
    const maxTemp = "19";
    const formatedMaxTemp = "19°C";
    const wrapper = shallowMount(BasicWeatherTile, {
      props: { maxTemp },
    });
    expect(wrapper.text()).toMatch(formatedMaxTemp);
  });

  it("renders minTemp with °C literal", () => {
    const minTemp = "0";
    const formatedMinTemp = "0°C";
    const wrapper = shallowMount(BasicWeatherTile, {
      props: { minTemp },
    });
    expect(wrapper.text()).toMatch(formatedMinTemp);
  });
});
