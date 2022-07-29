export type Product = {
    id: number;
    imageSource: string;
    name: string;
    description: string;
    price: number;
}

export type CartEntry = {
    product: Product;
    count: number;
}