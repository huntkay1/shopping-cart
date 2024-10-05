import { createContext, useState, useContext, useMemo } from 'react';

//creates the new context
const CartContext = createContext();

//Provider Component that is accessible to all children components (the components that are wrapped around by the CartProvider in main.jsx)
export function CartProvider({ children }) {
    const [cartContents, setCartContents] = useState([]);

    const cartQuantity = useMemo(() => {
        return cartContents.reduce((total, item) => total + item.quantity, 0);
    }, [cartContents]);

    const cartTotals = useMemo(() => {
        const subtotal = cartContents.reduce((total, item) => total + (item.product_price * item.quantity), 0).toFixed(2);
        const tax = (subtotal * 0.06).toFixed(2);
        const grandTotal = (+subtotal + +tax).toFixed(2);

        return {
            subtotal,
            tax,
            grandTotal
        };
    }, [cartContents]);

    function addToCart(product) {
        setCartContents(prevCart => {
            const productExists = prevCart.find(item => item.id === product.id);

            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    function removeItemFromCart(selectedProduct) {
        const updatedCart = cartContents.filter(item => item.id !== selectedProduct.id);
        setCartContents(updatedCart);
    }

    //if the product quantity reaches 0, remove the item from the cart
    function changeProductQuantity(product, action) {
        setCartContents(prevCart =>
            prevCart.map(item => {
                if (item.id === product.id) {
                    const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
                    if (newQuantity > 0) {
                        return { ...item, quantity: newQuantity };
                    } else {
                        removeItemFromCart(product);
                    }
                }
                return item;
            })
        );
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







