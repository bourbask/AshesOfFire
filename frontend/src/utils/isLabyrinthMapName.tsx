import { LABYRINTH_MAP, LabyrinthMapName } from "./decodeAddress";

function isLabyrinthMapName(value: string): value is LabyrinthMapName {
    return value in LABYRINTH_MAP;
}

export default isLabyrinthMapName;