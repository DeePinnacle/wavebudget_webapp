import { create } from "zustand";
import { persist } from "zustand/middleware";
interface CartItem {
    id: number,
    product: string,
    price: number,
    quantity: number
}

interface PersistConfig {
    name: string
}

// state and action for the cart
interface CartState {
    carts: CartItem[],
    addToCart: (cart: CartItem) => void,
    removeCartItem: (id: number) => void ,
}

export const useCartStore = create<CartState>()(
    persist(        
        (set) =>({
        carts: [],
        // addToCart: (product) => set((state) => {
        //     const existingItemIndex = state.carts.findIndex(cartItem => cartItem.id === product.id);

        //     if (existingItemIndex >= 0) {
        //         // Item exists, update quantity
        //         const updatedCarts = state.carts.map((cartItem, index) => 
        //             index === existingItemIndex
        //                 ? { ...cartItem, quantity: cartItem.quantity + product.quantity }
        //                 : cartItem
        //         );
        //         return { carts: updatedCarts };
        //     } else {
        //         // Item does not exist, add new item
        //         return { carts: [...state.carts, product] };
        //     }
        // }),
        addToCart: (product) => set((state) => ({ carts: [...state.carts, product] })),
        removeCartItem: (productId)=> set((state) => ({ carts: state.carts.filter(product => product.id !== productId)})),
        clearCart: () => set({ carts: [] }),
    }),{
        name: "cart-storage"
    })
    )