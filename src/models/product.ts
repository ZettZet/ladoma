export type Product = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
}

export type CartEntry = {
    product: Product;
    count: number;
}