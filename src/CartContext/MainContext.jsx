import React, { createContext, useState } from 'react';
let CartContext = createContext();
export default function MainContext({ children }) {

    // let oldData=JSON.parse(localStorage.getItem("CART")) ?? []
    const data = [
        {
            id: 1,
            item: "Today's Special [A Coffee and snack Combo]",
            price: 180
        },
        {
            id: 2,
            item: "Hot Coffee",
            price: 80,
        },
        {
            id: 3,
            item: "Delicious Beverages",
            price: 150,
        },
        {
            id: 4,
            item: "Coffee with ice cream and pancakes",
            price: 210,
        },
        {
            id: 5,
            item: "Brewed Coffee",
            price: 120,
        },
        {
            id: 6,
            item: "Cappuccino with pancakes",
            price: 120,
        }
    ]

    let [carts, setCarts] = useState([])
    let crtData = {
        carts,
        setCarts,
        data
    }

    // useEffect(() => {
    //     localStorage.setItem('CART', JSON.stringify(carts))
    // }, [carts])
    return (
        <CartContext.Provider value={crtData}  >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext };
