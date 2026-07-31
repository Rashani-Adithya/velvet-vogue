import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    // Add Product
    const addToCart = (product, quantity, size, colour) => {

        setCartItems((prevItems) => {

            const existingItem = prevItems.find(
                (item) =>
                    item.id === product.id &&
                    item.size === size &&
                    item.colour === colour
            );

            if (existingItem) {

                return prevItems.map((item) =>
                    item.id === product.id &&
                    item.size === size &&
                    item.colour === colour
                        ? {
                              ...item,
                              quantity: item.quantity + quantity,
                          }
                        : item
                );

            }

            return [
                ...prevItems,
                {
                    ...product,
                    quantity,
                    size,
                    colour,
                },
            ];

        });

    };

    // Remove Product
    const removeFromCart = (id, size, colour) => {

        setCartItems((prevItems) =>
            prevItems.filter(
                (item) =>
                    !(
                        item.id === id &&
                        item.size === size &&
                        item.colour === colour
                    )
            )
        );

    };

    // Update Quantity
    const updateQuantity = (id, size, colour, quantity) => {

        if (quantity < 1) quantity = 1;

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id &&
                item.size === size &&
                item.colour === colour
                    ? {
                          ...item,
                          quantity,
                      }
                    : item
            )
        );

    };

    // Clear Cart
    const clearCart = () => {

        setCartItems([]);

    };

    // Total Price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Total Items
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (

        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalPrice,
                totalItems,
            }}
        >

            {children}

        </CartContext.Provider>

    );

}

export const useCart = () => useContext(CartContext);