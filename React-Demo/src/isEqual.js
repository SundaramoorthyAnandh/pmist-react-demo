export function isEqual(x, y) {
    if (x === y) {
        return true;
    }

    if (
        typeof x !== 'object' ||
        x === null ||
        typeof y !== 'object' ||
        y === null
    ) {
        return false;
    }

    if (Array.isArray(x) && Array.isArray(y)) {
        if (x.length !== y.length) {
            return false;
        }

        const yCopy = [...y];

        for (const xItem of x) {
            const matchIndex = yCopy.findIndex(yItem => isEqual(xItem, yItem));

            if (matchIndex > -1) {
                yCopy.splice(matchIndex, 1);
            } else {
                return false;
            }
        }

        return true;
    }

    if (Array.isArray(x) !== Array.isArray(y)) {
        return false;
    }

    const keysX = Object.keys(x);
    const keysY = Object.keys(y);

    if (keysX.length !== keysY.length) {
        return false;
    }

    for (const key of keysX) {
        if (!keysY.includes(key) || !isEqual(x[key], y[key])) {
            return false;
        }
    }

    return true;
}