import { createContext, useState, useContext } from 'react';

//creates the new context
const CartContext = createContext();

//Provider Component that is accessible to all children components (the components that are wrapped around by the CartProvider in main.jsx)
export function CartProvider({ children }) {
    const [cartContents, setCartContents] = useState([]);

    function addToCart(product) {
        setCartContents(prevCart => [...prevCart, product]);
    }

    function getCartWithQuantities() {
        const quantityMap = [];
        cartContents.forEach(item => {
            if (!quantityMap[item.product_id]) {
                quantityMap[item.product_id] = {...item, quantity: 1};
            } else {
                quantityMap[item.product_id].quantity++;
            }
        })

        return quantityMap
    }

    function removeItemFromCart(selectedProduct) {
        const updatedCart = cartContents.filter(item => item.product_id != selectedProduct.product_id)
        setCartContents(updatedCart)
    }


    return (
        <CartContext.Provider value={{ cartContents, addToCart, getCartWithQuantities, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook that can be used by any component that needs to access or modify the cart
export function useCart() {
    return useContext(CartContext);
}







