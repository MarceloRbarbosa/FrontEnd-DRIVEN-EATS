import type { MenuItem } from "../types/menu";

export function sendMessage(dish:MenuItem, drink:MenuItem, dessert:MenuItem, clientName:String){
    const total = dish.price + drink.price + dessert.price
    
    const message = 
    `Olá, gostaria de fazer o pedido:\n` +
    `- Prato: ${dish.name}\n` +
    `- Bebida: ${drink.name}\n` +
    `- Sobremesa: ${dessert.name}\n` +
    `Total: ${total.toFixed(2)}\n\n` +
    `Cliente: ${clientName}\n` +
    `Obrigado pela preferência!`;

  return encodeURIComponent(message);

}