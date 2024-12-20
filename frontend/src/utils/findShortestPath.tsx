export type Connection = {
    from: string;
    to: string;
    weight: number;
};

const findShortestPath = (
    connections: Connection[],
    start: string,
    end: string
): string[] => {
    const graph = new Map<string, { [key: string]: number }>();

    // Build graph from connections
    connections.forEach(({ from, to, weight }) => {
        if (!graph.has(from)) graph.set(from, {});
        graph.get(from)![to] = weight;
    });

    // Initialize distances and previous nodes
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const unvisited = new Set<string>();

    graph.forEach((_, node) => {
        distances[node] = Infinity;
        previous[node] = null;
        unvisited.add(node);
    });
    distances[start] = 0;

    // Dijkstra's algorithm
    while (unvisited.size) {
        const current = Array.from(unvisited).reduce((minNode, node) =>
        distances[node] < distances[minNode] ? node : minNode
        );

        if (current === end || distances[current] === Infinity) break;
        unvisited.delete(current);

        const neighbors = graph.get(current)!;
        for (const neighbor in Object.keys(neighbors)) {
        const alt = distances[current] + neighbors[neighbor];
        if (alt < distances[neighbor]) {
            distances[neighbor] = alt;
            previous[neighbor] = current;
        }
        }

        console.log(`Visiting node: ${current}`);
        console.log(`Unvisited nodes: ${Array.from(unvisited)}`);
        console.log(`Distances:`, distances);
        console.log(`Previous nodes:`, previous);
    }

    // Reconstruct the path
    const path: string[] = [];
    let current = end;
    while (current) {
        path.unshift(current);
        current = previous[current]!;
    }

    return path[0] === start ? path : [];
};

export default findShortestPath;