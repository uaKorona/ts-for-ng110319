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

isInArray([5, 9, 'fd', '*', 5, 'fd', '*']);

/**
 * Написать функцию summator(), которая суммирует переданые ей аргументы.
 * Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 * @param args
 * @returns {number}
 */
function summator(...args: (number|string)[]): number {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            sum += Number(args[i]);
        }
    }
    return sum;
}

summator(5,9,'5');


