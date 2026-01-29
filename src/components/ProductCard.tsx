import type { MenuItem } from "../types/menu";

type Props = {
    item: MenuItem;
    selected: boolean;
    onSelect: (item: MenuItem) => void;
}

export function ProductCard({ item, selected, onSelect}: Props){
    return (
        <div 
        className={`product-card ${selected ? "selected" : ""}`}
            onClick={() => onSelect(item)}
            >
      <img className="product-image" src={item.imageUrl} alt={item.name} />
      <h3 className="product-name">{item.name}</h3>
      <p className="product-desc">{item.description}</p>
      <p className="product-price">R$ {item.price.toFixed(2)}</p>

    </div>
    )
}