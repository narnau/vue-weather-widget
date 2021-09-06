import { getWeekDay, isSameDate } from "@/lib/dateUtilities";

describe("dateUtilities.ts", () => {
  describe("getWeekDay", () => {
    it("returns Monday string when 6 Sep 2021 is passed", () => {
      expect(getWeekDay(new Date(2021, 8, 6))).toBe("Monday");
    });
  });

  describe("isSameDate", () => {
    it("returns false when 6 Sep 2021 and 7 Sep 2021 are compared", () => {
      expect(isSameDate(new Date(2021, 8, 6), new Date(2021, 8, 7))).toBe(
        false
      );
    });

    it("returns true when 6 Sep 2021 and 6 Sep 2021 are compared", () => {
      expect(isSameDate(new Date(2021, 8, 6), new Date(2021, 8, 6))).toBe(true);
    });
  });
});
