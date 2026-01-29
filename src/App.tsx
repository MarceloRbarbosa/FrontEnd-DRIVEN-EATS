import { useState } from 'react'
import { menu } from './data/dataMenu'
import { FooterButton } from './components/FooterButton'
import { Header } from './components/Header'
import type { MenuItem } from './types/menu'
import { ProductCard } from './components/ProductCard'
import { OrderModal } from './components/OrderModal'


function App() {
  const dishes = menu.filter((i) => i.category === "dish");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const drinks = menu.filter((i) => i.category === "drink");
  const [selectedDrink, setSelectedDrink] = useState<MenuItem | null>(null);

  const desserts = menu.filter((i) => i.category === "dessert");
  const [selectedDessert, setSelectedDessert] = useState<MenuItem | null>(null);

  const canCloseOrder = Boolean(selectedDish && selectedDrink && selectedDessert);
  const buttonLabel = canCloseOrder ? "Fechar Pedido" : "Selecios os 3  itens para fechar o pedido"

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  
  return (
    <div className='page'>
      <Header />

       <main className="content">
        <h2 className='section-title'>Primeiro, seu prato</h2>

         <div className="horizontal-list">
          {dishes.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              selected={selectedDish?.id === item.id}
              onSelect={(clicked) => setSelectedDish((prev)=> (prev?.id === clicked.id ? null : clicked))}
            />
          ))}
          </div>

          <h2 className="section-title">Agora, sua bebida</h2>
          <div className="horizontal-list">
            {drinks.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                selected={selectedDrink?.id === item.id}
                onSelect={(clicked) =>
          setSelectedDrink((prev) => (prev?.id === clicked.id ? null : clicked))}
              />
            ))}
          </div>

          <h2 className="section-title">Por fim, sua sobremesa</h2>
          <div className="horizontal-list">
            {desserts.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                selected={selectedDessert?.id === item.id}
                onSelect={(clicked) =>
          setSelectedDessert((prev) => (prev?.id === clicked.id ? null : clicked))}
              />
            ))}
          </div>
      </main>

      <FooterButton  
        disabled={!canCloseOrder}
        label={buttonLabel}
        onClick={() => {
          if(!canCloseOrder) return;
          setIsConfirmOpen(true);
        }}
        />
      
      {isConfirmOpen && selectedDish && selectedDrink && selectedDessert && (
        <OrderModal
          dish={selectedDish}
          drink={selectedDrink}
          dessert={selectedDessert}
          onCancel={() => setIsConfirmOpen(false)}
        />
        
      )}
    </div>
  )}


export default App
