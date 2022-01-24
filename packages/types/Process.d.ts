declare namespace NodeJS {
    interface Process {
        client: boolean;
        server: boolean;
        browser: boolean;
        modules: import('./Modules').Modules;
    }
}
