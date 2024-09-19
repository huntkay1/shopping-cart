import { createContext, useState, useContext } from 'react';

//creates the new context
const CartContext = createContext();

//Provider Component that is accessible to all children components (the components that are wrapped around by the CartProvider in main.jsx)
export function CartProvider({ children }) {
    const [cartContents, setCartContents] = useState([]);

    function addToCart(product) {
        
        setCartContents(prevCart => {
            const productExists = prevCart.find(item => item.product_id === product.product_id);
    
            if (productExists) {
                // Increase quantity if product already exists
                return prevCart.map(item =>
                    item.product_id === product.product_id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new product with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        
    }

    function removeItemFromCart(selectedProduct) {
        const updatedCart = cartContents.filter(item => item.product_id != selectedProduct.product_id)
        setCartContents(updatedCart)
    }

    function changeQuantity(selectedProduct, increment) {
        console.log(selectedProduct, increment)
    }


    return (
        <CartContext.Provider value={{ cartContents, addToCart,  removeItemFromCart, changeQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook that can be used by any component that needs to access or modify the cart
export function useCart() {
    return useContext(CartContext);
}







