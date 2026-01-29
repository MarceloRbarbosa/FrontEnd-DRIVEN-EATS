import type { MenuItem } from "../types/menu";
import { sendMessage } from "../utils/whatsapp";

type Props = {
  dish: MenuItem;
  drink: MenuItem;
  dessert: MenuItem;
  onCancel: () => void;
};

export function OrderModal({ dish, drink, dessert, onCancel }: Props) {
  const clientName = prompt("Olá, qual é seu nome?") || "Cliente";
  const phone = import.meta.env.VITE_RESTAURANT_PHONE as string;
  const message = sendMessage(dish, drink, dessert, clientName);
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;
  
  const total =
    dish.price + drink.price + dessert.price;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3 className="modal-title">Confirme seu pedido</h3>

        <div className="modal-item">
          <span>{dish.name}</span>
          <span>R$ {dish.price.toFixed(2)}</span>
        </div>

        <div className="modal-item">
          <span>{drink.name}</span>
          <span>R$ {drink.price.toFixed(2)}</span>
        </div>

        <div className="modal-item">
          <span>{dessert.name}</span>
          <span>R$ {dessert.price.toFixed(2)}</span>
        </div>

        <div className="modal-total">
          <strong>Total</strong>
          <strong>R$ {total.toFixed(2)}</strong>
        </div>
          <a 
          className="modal-confirm"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          >
            Tudo certo, pode pedir!
          </a>
          <button className="modal-cancel" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
  );
}
