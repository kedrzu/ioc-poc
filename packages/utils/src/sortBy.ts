export type SortOrder = 'asc' | 'desc';

export interface SortOptions {
    order?: SortOrder;
    ignoreCase?: boolean;
}

export function sortBy<T>(array: T[], key: keyof T, options?: SortOptions) {
    const desc = options?.order === 'desc';
    const ignoreCase = options?.ignoreCase ?? false;

    return array.sort((a, b) => {
        let first = desc ? b[key] : (a[key] as unknown);
        let second = desc ? a[key] : (b[key] as unknown);

        if (typeof first === 'string') {
            if (ignoreCase) {
                first = first.toLocaleLowerCase();
                second = String(second).toLocaleLowerCase();
            }

            return (first as string).localeCompare(second as string);
        } else if (first === second) {
            return 0;
        } else if ((first as any) < (second as any)) {
            return -1;
        }

        return 1;
    });
}
