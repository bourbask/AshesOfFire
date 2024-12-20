import * as fs from 'fs';

export const script = () => {
    const connections = [
        "ATA12-SI44", "ATA21-HE22", "ATA24-AU21", "MA23-ATA41", "MA13-ATB12",
        "PE44-ATB21", "OR31-ATB23", "HE14-ATB31", "OR11-ATB32", "CY32-ATB33",
        "ATC13-ATB34", "HE42-ATB41", "MA31-ATB42", "OR43-ATC11", "OR44-ATC12",
        "PE41-ATC14", "ER23-ATC21", "SA21-ATC22", "MA24-ATC23", "OR13-ATC24",
        "BO42-AL11", "MA21-AL13", "HE44-AL41", "CY12-AL42", "AQ42-AQ11",
        "SI22-AQ14", "BO34-AQ41", "ER31-AQ43", "BO31-AQ44", "SI41-AU22",
        "SA24-AU23", "ER32-AU24", "OR42-CY11", "OR41-BO32", "MA11-CY31",
        "ER42-CY41", "ER33-CY42", "SA22-ER21", "PE12-ER22", "HE43-ER24",
        "PE43-ER34", "HE23-ER41", "MA22-HE11", "HE33-HE21", "SA23-HE24",
        "MA34-HE31", "SI21-HE41", "VO41-MA14", "MA42-MA32", "PE11-OR32"
    ];

    type BidirectionalConnectionsProps = { from: string; to: string; weight: number };

    // Transform connections into JSON
    const bidirectionalConnections: Array<BidirectionalConnectionsProps> = [];

    connections.forEach(conn => {
        const [from, to] = conn.split('-');
        bidirectionalConnections.push({ from, to, weight: 1 });
        bidirectionalConnections.push({ from: to, to: from, weight: 1 }); // Add reverse direction
    });

    // Write to JSON file
    const output = { connections: bidirectionalConnections };
    fs.writeFileSync('connections.json', JSON.stringify(output, null, 4), 'utf8');

    console.log('Fichier JSON généré : connections.json');
}