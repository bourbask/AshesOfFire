import calculateWeight from "../utils/calculateWeight";
import decodeAddress from "../utils/decodeAddress";

describe("calculateWeight", () => {
  it("should calculate weight for directly connected portals", () => {
    const start = decodeAddress("ATB31");
    const from = decodeAddress("ATB32");
    const to = decodeAddress("OR11");

    expect(calculateWeight(from, to, start)).toBe(2);
  });

  it("should assign higher weights for distant portals", () => {
    const start = decodeAddress("ATB31");
    const from = decodeAddress("ATB32");
    const to = decodeAddress("MA21");

    expect(calculateWeight(from, to, start)).toBeGreaterThan(3);
  });

  it("should assign weight 1 for the same portal", () => {
    const start = decodeAddress("ATB31");
    const from = decodeAddress("ATB31");
    const to = decodeAddress("ATB31");

    expect(calculateWeight(from, to, start)).toBe(1);
  });
});
