import React, { createContext, useState } from 'react';
export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const products = [
        {
            id: 1,
            name: "Casual Sneaker 1",
            price: 60,
            image: "assets/pngwing.com (5).png",
        },
        {
            id: 2,
            name: "Casual Sneaker 2",
            price: 70,
            image: "assets/pngwing.com (6).png",
        },
        {
            id: 3,
            name: "Casual Sneaker 3",
            price: 50,
            image: "assets/pngwing.com (7).png",
        },
        {
            id: 4,
            name: "Casual Sneaker 4",
            price: 90,
            image: "assets/pngwing.com (8).png",
        },
        {
            id: 5,
            name: "Casual Sneaker 5",
            price: 40,
            image: "assets/pngwing.com (5).png",
        },
        {
            id: 6,
            name: "Casual Sneaker 6",
            price: 65,
            image: "assets/pngwing.com (6).png",
        },
    ];


    return (
        <CartContext.Provider value={{ cart, setCart, products }}>
            {children} 
        </CartContext.Provider>
    );
}

export default CartProvider;
