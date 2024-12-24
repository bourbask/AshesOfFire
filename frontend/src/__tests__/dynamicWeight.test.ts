import * as fs from "fs";

import calculateWeight from "../utils/calculateWeight";
import convertCsvToJson from "../utils/convertCsvToJson";
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

  it("convert", () => {
    const myCsvData = `, 1,,,, 2,,,, 3,,,, 4,,,,,,,,,,
      ATA, ER13, SI44, BO23, ATB13, HE22, HE12, BO44, AU21, ER14, SI34, CY34, BO13, MA23, AQ21, SI31, AQ32,,,,,,,
      ATB, MA12, MA13, ATA14, SI14, PE44, OR12, OR31, AQ24, HE14, OR11, CY32, ATC13, HE42, MA31, SA33, ER44,,,,,,,
      ATC, OR43, OR44, ATB34, PE41, ER23, SA21, MA24, OR13, SA43, VO13, PE32, AQ33, BO14, SA12, AU42, OR24,,,,,,,
      AL, BO42, OR34, MA21, AU33, SI13, AL32, CY22, SI23, VO32, AL22, AQ23, AU41, HE44, CY12, SA13, AU44,,,,,,,
      AQ, AQ42, MA43, BO33, SI22, ATA42, SA34, AL33, ATB24, CY33, ATA44, ATC34, VO43, BO34, AQ11, ER31, BO31,,,,,,,
      AU, VO23, VO34, PE22, AU31, ATA24, SI41, SA24, ER32, AU14, PE13, ER43, AL14, AL34, ATC43, ER11, AL44,,,,,,,
      BO, BO22, ATA34, SI32, ATC41, CY14, CO11, ATA13, MA44, AQ44, OR41, AQ13, AQ41, VO14, AL11, PE24, ATA23,,,,,,,
      CY, OR42, AL42, SI43, BO21, SA32, AL23, OR23, VO33, MA11, ATB33, AQ31, ATA33, ER42, ER33, PE42, PE21,,,,,,,
      ER, AU43, SI24, ATA11, ATA31, SA22, PE12, ATC11, HE43, AQ43, AU24, CY42, PE43, HE23, CY41, AU33, ATB44,,,,,,,
      HE, MA22, ATA22, PE34, ATB31, HE33, ATA21, EI41, SA23, MA34, PE14, HE21, PE23, SI21, ATB41, ER24, AL41,,,,,,,
      MA, CY31, ATB11, ATB12, VO11, AL13, HE11, ATA41, ATV23, ATB42, MA42, SI12, HE31, OR33, MA32, AQ12, BO24,,,,,,,
      OR, ATB32, ATB22, ATC24, VO24, SA14, VO22, CY23, ATC44, ATB23, PE11, MA41, AL12, BO32, CY11, ATC11, ATC22,,,,,,,
      PE, OR32, ER22, AU32, HE32, CY44, AU13, HE34, BO43, VO21, ATC33, SA44, HE13, ATC14, CY43, ER34, ATB21,,,,,,,
      SA, SI33, ATC42, AL43, OR21, ATC22, ER21, HE24, AU23, SI11, CY21, ATB43, AQ22, VO44, SI42, ATC31, PE33,,,,,,,
      SI, SA31, MA33, AL21, ATB14, HE41, AQ14, AL24, ER12, ATA43, BO13, SA11, ATA32, AU22, SA42, CY13, ATA12,,,,,,,
      VO, MA14, VO42, ATC32, BO41, PE31, OR22, AU11, OR14, VO41, AL31, CY24, AU12, VO31, VO12, AQ34, SA41
    `;

    const result = convertCsvToJson(myCsvData);

    fs.writeFileSync(
      "complete_labyrinth_connections.json",
      JSON.stringify(result, null, 2),
      "utf8"
    );

    expect(result).toBe(true);
  });
});
