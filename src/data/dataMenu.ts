import type { MenuItem } from "../types/menu";

export const menu: MenuItem [] = [
//PRATOS
    {
    id: "dish-1",
    category: "dish",
    name: "Frango Yin Yang",
    description: "Um pouco de batata, um pouco de salada",
    price: 14.9,
    imageUrl: "/images/dishes/pf_frango.jpg",
  },
  {
    id: "dish-2",
    category: "dish",
    name: "Carne do Chef",
    description: "Carne ao molho com arroz",
    price: 16.5,
    imageUrl: "/images/dishes/pf_carne.jpg",
  },
  {
    id: "dish-3",
    category: "dish",
    name: "Calabresa com fritas",
    description: "Linguiça calabresa com fritas",
    price: 13.2,
    imageUrl: "/images/dishes/pf_calabresa.png",
  },

// BEBIDAS
  {
    id: "drink-1",
    category: "drink",
    name: "Coquinha Gelada",
    description: "Lata 350ml",
    price: 4.9,
    imageUrl: "/images/drinks/coca.png",
  },
  {
    id: "drink-2",
    category: "drink",
    name: "Suco Natural",
    description: "Laranja 300ml",
    price: 6.5,
    imageUrl: "/images/drinks/suco.png",
  },
  {
    id: "drink-3",
    category: "drink",
    name: "Fanta Laranja",
    description: "Lata 350ml",
    price: 3.5,
    imageUrl: "/images/drinks/fanta.png",
  },

// SOBREMESAS
  {
    id: "dessert-1",
    category: "dessert",
    name: "Pudim",
    description: "Clássico da casa",
    price: 7.9,
    imageUrl: "/images/desserts/pudim.jpg",
  },
  {
    id: "dessert-2",
    category: "dessert",
    name: "Brownie",
    description: "Com chocolate",
    price: 8.5,
    imageUrl: "/images/desserts/brownie.jpg",
  },
  {
    id: "dessert-3",
    category: "dessert",
    name: "Mousse",
    description: "Maracujá",
    price: 6.9,
    imageUrl: "/images/desserts/mousse.jpg",
  },
];
