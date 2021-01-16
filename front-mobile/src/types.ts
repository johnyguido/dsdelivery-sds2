export type Order = {
        id: number;
        address: number;
        latitude: string;
        longitude: number;
        moment: string;
        status: string;
        products: [];
        total: number;
    }

    export type Product = {
        
            id: number;
            name: string;
            price: number;
            description: string;
            imageUri: string;
        
    }