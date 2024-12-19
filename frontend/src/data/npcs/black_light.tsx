import { NpcProps } from "../../types/npcs";

const impulseII: NpcProps = {
    name: 'Impulse II',
    hp: 1200000,
    shield: 750000,
    shield_absorption: 0.6,
    range: 600,
    speed: 500,
    damage: 11000,
    cargo: {
        minerals: {
            'Prometium': 350,
            'Endurium': 350,
            'Terbium': 350,
            'Prometid': 80,
            'Duranium': 80,
            'Promerium': 10,
        }
    },
    reward: {
        'Credit': 200000,
        'Uridium': 45,
        'Experience': 55000,
        'Honor': 200,
        'Grade': 5,
        'Rinusk': {
            min: 15,
            max: 25,
        },
        'Traceur': {
            min: 0,
            max: 0,
        },
        'Cerebrum': {
            min: 0,
            max: 0,
        },
    },
    is_blacklight: true,
};

const mindfire_behemot: NpcProps = {
    name: 'Mindfire Behemot',
    hp: 135600000,
    shield: 0,
    shield_absorption: 0.5,
    range: 1000,
    speed: 0,
    damage: 145000,
    is_blacklight: true,
    cargo: {
        minerals: {
            'Prometium': 1000,
            'Endurium': 1000,
            'Terbium': 1000,
            'Prometid': 100,
            'Duranium': 100,
            'Xenomit': 50,
            'Promerium': 10,
        }
    },
    reward: {
        'Credit': 20000000,
        'Uridium': 6550,
        'Experience': 17600000,
        'Honor': 88000,
        'Grade': 30,
        'Rinusk': {
            min: 100,
            max: 130,
        },
        'Traceur': {
            min: 120,
            max: 130,
        },
        'Cerebrum': {
            min: 30,
            max: 40,
        },
    },
};

const blackLightNpcs: {
    [key: string]: NpcProps;
} = {
    impulseII,
    mindfire_behemot,
};

export default blackLightNpcs;
export type BlackLightNpcs = typeof blackLightNpcs;