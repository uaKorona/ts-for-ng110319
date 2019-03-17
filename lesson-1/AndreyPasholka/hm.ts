function isInArray(array: Array<any>, ...needles: any[]) {
    if (!Array.isArray(array)) {
        throw new Error('First argument should be array');
    }

    const argsCount = needles.length;
    for (let i = 0; i < argsCount; i++) {
        let needle = needles[i];
        if (array.indexOf(needle) === -1) {
            return false;
        }
    }

    return true;
}

isInArray([5,9,'fd','*', 5, 'fd', '*']);