/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export type NonPartial<T> = { [P in keyof T]-?: T[P] };

export type Primitive = string | boolean | number;

export type Strict<T> = Exclude<T, null | undefined>;

export type Flatten<T> = Exclude<
    {
        [K in keyof T]: T[K];
    },
    undefined
>;

export type PropertyNames<T> = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

/** Only properties of the object, without functions */
export type Properties<T> = {
    [K in PropertyNames<T>]: T[K];
};

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
) => void
    ? I
    : never;

export type FlattenUnion<T> = Flatten<{
    [K in keyof UnionToIntersection<T>]: K extends keyof T
        ? T[K] extends any[]
            ? T[K]
            : T[K] extends object
            ? FlattenUnion<T[K]>
            : T[K]
        : UnionToIntersection<T>[K];
}>;

export type Merge<T1, T2> = Exclude<
    {
        [K in keyof (T1 & T2)]: (T1 & T2)[K];
    },
    undefined
>;

export type Override<T1, T2> = Exclude<
    {
        [K in keyof (T1 & T2)]: K extends keyof T2 ? T2[K] : K extends keyof T1 ? T1[K] : never;
    },
    undefined
>;

export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
export type IsAny<T> = IfAny<T, true, false>;

export type IfNullable<T, Y, N> = IsAny<T> extends true ? boolean : T | null extends T ? Y : N;
export type IsNullable<T> = IfNullable<T, true, false>;

export type IfUndefined<T, Y, N> = IsAny<T> extends true
    ? boolean
    : T | undefined extends T
    ? Y
    : N;
export type IsUndefined<T> = IfUndefined<T, true, false>;

export type Maybe<T> = T | null | undefined;

export type Item<T> = T extends any[] ? T[0] : T[keyof T];

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
