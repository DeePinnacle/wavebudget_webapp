// store/cartStore.ts
import create from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => {
    // Replace item with the same ID or add the new item
    return {
      items: state.items.some((i) => i.id === item.id)
        ? state.items.map((i) => (i.id === item.id ? item : i))
        : [...state.items, item],
    };
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  getTotal: () => {
    return (state) => state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
}));



// usage
// pages/index.tsx
import { useCartStore } from '../store/cartStore';

const HomePage = () => {
  const { addItem, items, removeItem, getTotal } = useCartStore((state) => ({
    addItem: state.addItem,
    items: state.items,
    removeItem: state.removeItem,
    getTotal: state.getTotal,
  }));

  const handleAddItem = () => {
    const newItem = {
      id: '1', // Change this ID to see the effect of replacing items
      name: 'Sample Item',
      price: 10,
      quantity: 1,
    };
    addItem(newItem);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={handleAddItem}>Add Item to Cart</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${getTotal()}</h2>
    </div>
  );
};

export default HomePage;