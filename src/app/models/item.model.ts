export interface Item {
        id?: string;         // Optional, as Firebase auto-generates it
        name: string;
        category: string;
        description: string;
        price: number;
}

