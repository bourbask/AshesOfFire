/**
 * Convert the custom CSV (map-based rows with 16 addresses) into a JSON "connections" array.
 * Each row looks like:
 *   <MapShortName>, <16 addresses>...
 *
 * For row=ATA and the first 4 addresses = (ER13, SI44, BO23, ATB13), we interpret that as:
 *   ATA, section=1, portal=1 => ER13
 *   ATA, section=1, portal=2 => SI44
 *   ATA, section=1, portal=3 => BO23
 *   ATA, section=1, portal=4 => ATB13
 * And so on for sections=2..4, each with portals=1..4.
 *
 * This function outputs a JSON with connections of the form:
 * {
 *   "connections": [
 *     { "from": "ATA11", "to": "ER13", "weight": 0 },
 *     { "from": "ER13", "to": "ATA11", "weight": 0 },
 *     ...
 *   ]
 * }
 *
 * @param csvString The raw CSV content.
 * @returns An object with a "connections" array.
 */
const convertCsvToJson = (csvString: string) => {
  const lines = csvString
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  // If the first line is just the header with ",1,,,,2,,,,3,,,,4", remove it
  if (lines.length > 0 && lines[0].match(/^,\s*1/)) {
    lines.shift();
  }

  const connections: Array<{ from: string; to: string; weight: number }> = [];

  for (const line of lines) {
    // Each line: <MapName>, <16 addresses>...
    const cells = line
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    if (cells.length < 2) {
      // If there's no address data, skip
      continue;
    }

    // First cell is the map shortname, e.g. "ATA"
    const mapShortName = cells[0];

    // The next 16 cells correspond to 4 sections × 4 portals each = 16 addresses
    // If there are more or fewer, we'll handle up to 16 anyway.
    const addresses = cells.slice(1);

    // We expect addresses.length >= 16 for a full row, but if shorter, we just do what we can
    for (let i = 0; i < addresses.length && i < 16; i++) {
      const toValue = addresses[i];

      // Section index: i // 4 => 0..3 (for sections 1..4)
      // Portal index: i % 4 => 0..3 (for portals 1..4)
      const section = Math.floor(i / 4) + 1; // 1..4
      const portal = (i % 4) + 1;            // 1..4

      // Construct the "from" as <MapShortName><section><portal>, e.g. "ATA11"
      const fromAddress = `${mapShortName}${section}${portal}`;

      // Add bidirectional connections
      connections.push({
        from: fromAddress,
        to: toValue,
        weight: 0
      });
      connections.push({
        from: toValue,
        to: fromAddress,
        weight: 0
      });
    }
  }

  return { connections };
};

export default convertCsvToJson;
