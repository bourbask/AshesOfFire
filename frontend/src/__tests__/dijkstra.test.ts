import labyrinthConnections from "../data/winter_event/labyrinth_connections.json";
import findClosestTargetSector from "../utils/findClosestTargetSector";

describe("dijkstra", () => {
  it("should find the nearest sector from the same map", () => {
    const result = findClosestTargetSector(
      labyrinthConnections.connections,
      "ATC1",
      4
    );
    expect(result).toEqual(["ATC11", "OR43"]);
  });

  it("should navigate to a distant sector not directly accessible", () => {
    const result = findClosestTargetSector(
      labyrinthConnections.connections,
      "ATB3",
      2
    );
    expect(result).toEqual(["ATB32", "OR11", "ATC24"]);
  });

  it("should handle no possible path gracefully", () => {
    const result = findClosestTargetSector(
      labyrinthConnections.connections,
      "ATC1",
      5
    );
    expect(result).toEqual([]);
  });

  it("should find a direct path if already at the destination sector", () => {
    const result = findClosestTargetSector(
      labyrinthConnections.connections,
      "ATA4",
      4
    );
    expect(result).toEqual(["ATA41"]);
  });

  it("should throw an error for invalid addresses", () => {
    expect(() =>
      findClosestTargetSector(labyrinthConnections.connections, "INVALID1", 4)
    ).toThrow("Invalid address format");
  });
});
