import {
  degToCompass,
  mpsToKmph,
  getWeatherIconName,
} from "@/lib/conversionUtilities";
import { TimeOfDay } from "@/lib/types";

describe("conversionUtilities.ts", () => {
  describe("degToCompass", () => {
    it("returns N when degree value is 11", () => {
      expect(degToCompass(11)).toBe("N");
    });

    it("returns WSW when degree value is 240", () => {
      expect(degToCompass(240)).toBe("WSW");
    });
  });

  describe("mpsToKmph", () => {
    it("returns 144km/h when the input is 40m/s", () => {
      expect(mpsToKmph(40)).toBe(144);
    });

    it("returns 144km/h when the input is 40m/s", () => {
      expect(mpsToKmph(40)).toBe(144);
    });
  });

  describe("getWeatherIconName", () => {
    it("returns thunderstorm icon when weatherIconId is 200", () => {
      expect(getWeatherIconName(200)).toBe("/weatherIcons/thunderstorm.svg");
    });

    it("returns a day icon when the time of day is not specified", () => {
      expect(getWeatherIconName(500)).toBe("/weatherIcons/moderateraind.svg");
    });

    it("returns a night icon when the time of day is night", () => {
      expect(getWeatherIconName(500, TimeOfDay.Night)).toBe(
        "/weatherIcons/moderaterainn.svg"
      );
    });
  });
});
