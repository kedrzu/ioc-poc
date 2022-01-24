import { Immutable } from '@iocpoc/types';

export function arrayRemove<T>(array: T[], item: T) {
    const index = array.indexOf(item);
    if (index < 0) {
        return false;
    }

    array.splice(index, 1);
    return true;
}

export function getLastItem<T>(array: Immutable<T[]>) {
    if (!array.length) {
        throw new Error('Collection is empty');
    }

    return array[array.length - 1];
}

export function splitIntoChunks<T>(array: T[], chunkSize: number) {
    if (chunkSize < 1) {
        throw new Error('Chunk must be greater than 0');
    }

    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        result.push(chunk);
    }

    return result;
}

export function arrayReverse<T>(array: readonly T[]): Iterable<T> {
    let index = array.length;

    const iterator: Iterator<T> = {
        next() {
            index--;
            return {
                done: index < 0,
                value: array[index],
            };
        },
    };

    return {
        [Symbol.iterator]: () => iterator,
    };
}
