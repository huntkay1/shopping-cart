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
            const productExists = prevCart.find(item => item.id === product.id);
    
            if (productExists) {
                // Increase quantity if product already exists
                return prevCart.map(item =>
                    item.id === product.id
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
        let currentCartQuantity = cartQuantity + difference;
        if (currentCartQuantity < 0) {
            currentCartQuantity = 0
        }
        setCartQuantity(currentCartQuantity);
    }

    function removeItemFromCart(selectedProduct) {
        const updatedCart = cartContents.filter(item => item.id != selectedProduct.id)
        adjustCartQuantity(-1)
        setCartContents(updatedCart)
    }

    function changeProductQuantity(product, action) {
        adjustCartQuantity(action === 'increase' ? 1 : -1);
        
        setCartContents(prevCart =>
            prevCart.map(item => {
                if (item.id === product.id) {
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

    function cartTotals() {
        const subtotal = cartContents.reduce((total, item) => total + (item.product_price * item.quantity), 0).toFixed(2);
        const tax = (subtotal * 0.06).toFixed(2);
        const grandTotal = (+subtotal + +tax).toFixed(2);
    
        return {
            subtotal,
            tax,
            grandTotal
        };
    }

    return (
        <CartContext.Provider value={{ cartContents, addToCart, removeItemFromCart, changeProductQuantity, cartQuantity, cartTotals }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook that can be used by any component that needs to access or modify the cart
export function useCart() {
    return useContext(CartContext);
}







