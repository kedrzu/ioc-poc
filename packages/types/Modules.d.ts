export interface Modules {
    cart?: boolean;
    order?: boolean;
    stack?: boolean;
    [id: string]: boolean | undefined;
}
