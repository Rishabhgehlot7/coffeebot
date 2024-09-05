import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/MainContext';

const TryItem1 = (props) => {
    let { carts, setCarts, data } = useContext(CartContext);
    const handleOrder = () => {
        props.actions.handleOrder(props.item); // Pass the item name to handleOrder
        const index = carts.findIndex(item => item.title === data[0].item);
        if (index !== -1) {

            const updatedCarts = [...carts];
            updatedCarts[index].qty += 1;
            setCarts(updatedCarts);
        }
        else {
            // If the item is not in the cart, add it with quantity 1
            setCarts([...carts, { title: data[0].item, price: data[0].price, qty: 1 }]);
        }
    }
    const handleTodaySpecialNo = () => {
        props.actions.handleTodaySpecialNo(props.item); // Pass the item name to handleOrder
    }
    console.log(data);
    return (
        <div className='leftM'>
            <button className='btn-bot' onClick={handleOrder}>{`Try ${props.item}`}</button>
            <button className='btn-bot' onClick={handleTodaySpecialNo}>Some thing else</button>
        </div>
    )
}

export default TryItem1