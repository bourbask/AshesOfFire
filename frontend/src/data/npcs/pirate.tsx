import { NpcProps } from "../../types/npcs";

const interceptor: NpcProps = {
    name: 'Interceptor',
    hp: 45000,
    shield: 40000,
    shield_absorption: 0.5,
    range: 500,
    speed: 600,
    damage: 400,
    cargo: {
        minerals: {
            'Prometium': 100,
            'Endurium': 100,
            'Terbium': 100,
            'Prometid': 18,
            'Duranium': 18,
            'Promerium': 2,
        }
    },
    reward: {
        'Credit': 25000,
        'Uridium': 20,
        'Experience': 7500,
        'Honor': 40,
        'Grade': 0.5,
    },
};

const battleray: NpcProps = {
    name: 'BattleRay',
    hp: 330000,
    shield: 260000,
    shield_absorption: 0.5,
    range: 400,
    speed: 200,
    damage: 5000,
    cargo: {
        minerals: {
            'Prometium': 400,
            'Endurium': 400,
            'Terbium': 400,
            'Prometid': 64,
            'Duranium': 64,
            'Promerium': 20,
            'Xenomit': 4,
        }
    },
    reward: {
        'Credit': 1160000,
        'Uridium': 116,
        'Experience': 82467,
        'Honor': 158,
        'Grade': 8,
    },
};

const pirateNpcs: {
    [key: string]: NpcProps;
} = {
    interceptor,
    battleray,
};

export default pirateNpcs;
export type PirateNpcs = typeof pirateNpcs;