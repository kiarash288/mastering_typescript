type DataStore = {
    [prop: string] : number | boolean;
}

let store : DataStore = {};

// Tuple Types

let roles = ['admin', 'guest', 'editor'] as const;


const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;