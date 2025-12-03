
export default function Path({
    highlightedPath,
    nodePositions,
}) {
    return (
        <polyline
            points={
                highlightedPath.flatMap((id, idx, arr) => {
                    const pos = nodePositions[id];
                    if (!pos) return [];

                    // 1. Corridor to Stairs (E-) Good
                    if (
                        id.startsWith("C-") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("E-")
                    ) {
                        console.log("1");
                        const nextStairPos = nodePositions[arr[idx + 1]];
                        if (nextStairPos) {
                            // Go to corridor center, then turn at (x of stairs, y of corridor), then to stairs center
                            return [
                                `${nextStairPos.x},${pos.y}`,
                            ];
                        }
                    }

                    // 2. Stairs to Corridor
                    if (
                        id.startsWith("E-") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("C-")
                    ) {
                        console.log("2");
                        const prevCorridorPos = nodePositions[arr[idx - 1]];
                        if (prevCorridorPos) {
                            // Turn at (x of stairs, y of corridor), then to stairs center
                            return [
                                `${prevCorridorPos.x},${prevCorridorPos.y}`,
                                `${prevCorridorPos.x},${pos.y}`,
                            ];
                        }
                    }

                    // 3. Class to Corridor (as before)
                    if (
                        id.startsWith("L") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("C-")
                    ) {
                        console.log("3");
                        const nextCorridorPos = nodePositions[arr[idx + 1]];
                        if (nextCorridorPos) {
                            return [
                                `${pos.x},${pos.y}`,
                                `${pos.x},${nextCorridorPos.y}`,
                            ];
                        }
                    }

                    // 4. Corridor to Class (as before)
                    if (
                        id.startsWith("C-") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("L")
                    ) {
                        console.log("4");
                        const nextClassPos = nodePositions[arr[idx + 1]];
                        if (nextClassPos) {
                            return [
                                `${nextClassPos.x},${pos.y}`,
                            ];
                        }
                    }

                    // 5. Stairs to Class
                    if (
                        id.startsWith("E-") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("L")
                    ) {
                        console.log("5");
                        const nextClassPos = nodePositions[arr[idx + 1]];
                        if (nextClassPos) {
                            return [
                                `${nextClassPos.x},${pos.y}`,
                                `${pos.x},${pos.y}`,
                            ];
                        }
                    }

                    // 6. Class to Stairs
                    if (
                        id.startsWith("L") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("E-")
                    ) {
                        console.log("6");
                        const nextStairPos = nodePositions[arr[idx + 1]];
                        if (nextStairPos) {
                            return [
                                `${pos.x},${pos.y}`,
                                `${pos.x},${nextStairPos.y}`,
                            ];
                        }
                    }
                    // 7. Stairs to corridor
                    if (
                        id.startsWith("E-") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("C-")
                    ) {
                        console.log("7");
                        const nextCorridorPos = nodePositions[arr[idx + 1]];
                        if (nextCorridorPos) {
                            // Go from stairs center, horizontally to corridor x, then vertically to corridor center
                            return [
                                `${pos.x},${pos.y}`,
                                `${pos.x},${nextCorridorPos.y}`,
                            ];
                        }
                    }
                    // 8. Corridor to Corridor
                    if (
                        id.startsWith("C-") &&
                        idx < arr.length - 1 &&
                        arr[idx + 1].startsWith("C-")
                    ) {
                        console.log("8");
                        const nextCorridorPos = nodePositions[arr[idx + 1]];
                        if (nextCorridorPos) {
                            // Go from corridor center, horizontally to next corridor x, then vertically to next corridor center
                            return [
                                `${nextCorridorPos.x},${pos.y}`,
                                `${nextCorridorPos.x},${nextCorridorPos.y}`,
                            ];
                        }
                    }
                    // Default: just the node center
                    if (id.startsWith("C-") || id.startsWith("E-") || id.startsWith("L")) {
                        return [`${pos.x},${pos.y}`];
                    }
                    return [];
                }).join(" ")}
            fill="none"
            stroke="red"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
        />
    );
}