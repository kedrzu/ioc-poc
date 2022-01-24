import { Flatten } from './Common';

export type TypeName = '__typename';

export interface Typed<TType extends string = string> {
    __typename: TType;
}

export type WithType<T, TType extends string = string> = Flatten<T> & Typed<TType>;

export type WithoutType<T> = Flatten<{
    [K in Exclude<keyof T, TypeName>]: T[K];
}>;

export type Abstract<T> = T extends Typed ? WithType<WithoutType<T>, string> : T;
