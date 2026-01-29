import type { MenuItem } from "../types/menu"
import { ProductCard } from "./ProductCard"

type Props = {
    title: string;
    items: MenuItem[];
    selectId: string | null;
    onSelect: (item: MenuItem) => void;
}

export function CategorySection ({title, items, selectId, onSelect}: Props){
   return(
    <section>
        <h3 className='section-title'>{title}</h3>
        <div className='horizontal-list'>
            {items.map((item) => (
                <ProductCard 
                    key={item.id}
                    item={item}
                    selected={selectId === item.id}
                    onSelect={onSelect}
                />
               ))}
            </div>
    </section>
   )
   
}