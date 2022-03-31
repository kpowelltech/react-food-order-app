import React from 'react'

// Initializing the context with placeholder data for better auto completion

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;