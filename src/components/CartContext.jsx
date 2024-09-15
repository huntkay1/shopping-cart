import { createContext, useState, useContext } from 'react';

//creates the new context
const CartContext = createContext();

//Provider Component that is accessible to all children components (the components that are wrapped around by the CartProvider in main.jsx)
export function CartProvider({ children }) {
    const [cartContents, setCartContents] = useState([]);

    function addToCart(product) {
        setCartContents(prevCart => [...prevCart, product]);
    }

    return (
        <CartContext.Provider value={{ cartContents, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook that can be used by any component that needs to access or modify the cart
export function useCart() {
    return useContext(CartContext);
}







