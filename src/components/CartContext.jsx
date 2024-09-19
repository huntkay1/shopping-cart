import { createContext, useState, useContext } from 'react';

//creates the new context
const CartContext = createContext();

//Provider Component that is accessible to all children components (the components that are wrapped around by the CartProvider in main.jsx)
export function CartProvider({ children }) {
    const [cartContents, setCartContents] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    function addToCart(product) {
        adjustCartQuantity(1)
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

    function adjustCartQuantity(difference) {
        setCartQuantity(prevCartQuantity => prevCartQuantity + difference);
    }

    function removeItemFromCart(selectedProduct) {
        const updatedCart = cartContents.filter(item => item.product_id != selectedProduct.product_id)
        adjustCartQuantity(-1)
        setCartContents(updatedCart)
    }

    function changeProductQuantity(product, action) {
        adjustCartQuantity(action === 'increase' ? 1 : -1);
        
        setCartContents(prevCart =>
            prevCart.map(item => {
                if (item.product_id === product.product_id) {
                    const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;

                    if(newQuantity > 0) {
                        return { ...item, quantity: newQuantity };
                    } else {
                        removeItemFromCart(product)
                    };
                }
                return item;
            })
        );
    }

    return (
        <CartContext.Provider value={{ cartContents, addToCart, removeItemFromCart, changeProductQuantity, cartQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook that can be used by any component that needs to access or modify the cart
export function useCart() {
    return useContext(CartContext);
}







