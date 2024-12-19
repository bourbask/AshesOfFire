import { NpcProps } from "../../types/npcs";

const streuner: NpcProps = {
    name: 'Streuner',
    hp: 800,
    shield: 400,
    shield_absorption: 0.5,
    range: 200,
    speed: 200,
    damage: 20,
    cargo: {
        minerals: {
            'Prometium': 10,
            'Endurium': 10,
        }
    },
    reward: {
        'Credit': 400,
        'Uridium': 1,
        'Experience': 400,
        'Honor': 2,
        'Grade': 0,
    },
};

const lordakia: NpcProps = {
    name: 'Lordakia',
    hp: 2000,
    shield: 2000,
    shield_absorption: 0.5,
    range: 200,
    speed: 250,
    damage: 80,
    cargo: {
        minerals: {
            'Prometium': 20,
            'Endurium': 20,
            'Terbium': 20,
        }
    },
    reward: {
        'Credit': 800,
        'Uridium': 2,
        'Experience': 800,
        'Honor': 4,
        'Grade': 0,
    },
};

const saimon: NpcProps = {
    name: 'Saimon',
    hp: 6000,
    shield: 3000,
    shield_absorption: 0.5,
    range: 250,
    speed: 280,
    damage: 300,
    cargo: {
        minerals: {
            'Prometium': 40,
            'Endurium': 40,
            'Terbium': 40,
            'Prometid': 2,
            'Duranium': 2,
        }
    },
    reward: {
        'Credit': 1600,
        'Uridium': 4,
        'Experience': 1600,
        'Honor': 8,
        'Grade': 1,
    },
};

const mordon: NpcProps = {
    name: 'Mordon',
    hp: 20000,
    shield: 10000,
    shield_absorption: 0.5,
    range: 150,
    speed: 150,
    damage: 350,
    cargo: {
        minerals: {
            'Prometium': 80,
            'Endurium': 80,
            'Terbium': 80,
            'Prometid': 8,
            'Duranium': 8,
        }
    },
    reward: {
        'Credit': 6400,
        'Uridium': 8,
        'Experience': 3200,
        'Honor': 16,
        'Grade': 1,
    },
};

const devolarium: NpcProps = {
    name: 'Devolarium',
    hp: 100000,
    shield: 100000,
    shield_absorption: 0.5,
    range: 200,
    speed: 200,
    damage: 1000,
    cargo: {
        minerals: {
            'Prometium': 100,
            'Endurium': 100,
            'Terbium': 100,
            'Prometid': 16,
            'Duranium': 16,
            'Promerium': 2,
        }
    },
    reward: {
        'Credit': 51200,
        'Uridium': 16,
        'Experience': 6400,
        'Honor': 32,
        'Grade': 2,
    },
};

const kristallin: NpcProps = {
    name: 'Kristallin',
    hp: 50000,
    shield: 40000,
    shield_absorption: 0.5,
    range: 500,
    speed: 500,
    damage: 1100,
    cargo: {
        minerals: {
            'Prometium': 100,
            'Endurium': 100,
            'Terbium': 100,
            'Prometid': 16,
            'Duranium': 16,
            'Promerium': 1,
        }
    },
    reward: {
        'Credit': 12800,
        'Uridium': 16,
        'Experience': 6400,
        'Honor': 32,
        'Grade': 1.5,
    },
};

const kristallon: NpcProps = {
    name: 'Kristallon',
    hp: 400000,
    shield: 300000,
    shield_absorption: 0.5,
    range: 500,
    speed: 350,
    damage: 4800,
    cargo: {
        minerals: {
            'Prometium': 300,
            'Endurium': 300,
            'Terbium': 300,
            'Prometid': 128,
            'Duranium': 128,
            'Promerium': 16,
        }
    },
    reward: {
        'Credit': 409600,
        'Uridium': 128,
        'Experience': 51200,
        'Honor': 256,
        'Grade': 4,
    },
};

const protegit: NpcProps = {
    name: 'Protegit',
    hp: 50000,
    shield: 40000,
    shield_absorption: 0.5,
    range: 500,
    speed: 550,
    damage: 1000,
    cargo: {
        minerals: {
            'Prometium': 100,
            'Endurium': 100,
            'Terbium': 100,
            'Prometid': 16,
            'Duranium': 16,
            'Promerium': 1,
        }
    },
    reward: {
        'Credit': 12800,
        'Uridium': 16,
        'Experience': 6400,
        'Honor': 32,
        'Grade': 1.5,
    },
};

const cubikon: NpcProps = {
    name: 'Cubikon',
    hp: 1600000,
    shield: 1200000,
    shield_absorption: 0.5,
    range: 0,
    speed: 5,
    damage: 16000,
    cargo: {
        minerals: {
            'Prometium': 1200,
            'Endurium': 1200,
            'Terbium': 1200,
            'Prometid': 512,
            'Duranium': 512,
            'Promerium': 128,
            'Xenomit': 128,
        }
    },
    reward: {
        'Credit': 1638400,
        'Uridium': 1024,
        'Experience': 512000,
        'Honor': 4096,
        'Grade': 5,
    },
    summoner: {
        condition: 'On hit',
        summoned: [
            {
                amount: 20,
                npc: 'Protegit',
            },
        ]
    }
};

const classicNpcs: {
    [key: string]: NpcProps;
} = {
    streuner,
    lordakia,
    saimon,
    mordon,
    devolarium,
    kristallin,
    kristallon,
    protegit,
    cubikon,
};

export default classicNpcs;
export type ClassicNpcs = typeof classicNpcs;