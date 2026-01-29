export type Category = "dish" | "drink" | "dessert"

export type MenuItem = {
    id: string;
    category: Category;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}