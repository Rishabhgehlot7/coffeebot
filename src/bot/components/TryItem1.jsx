import React from 'react';

const TryItem1 = (props) => {
    const handleOrder = () => {
        props.actions.handleOrder(props.item); // Pass the item name to handleOrder
    }

    return (
        <div className='leftM'>
            <button className='btn-bot' onClick={handleOrder}>{`Try ${props.item}`}</button>
        </div>
    )
}

export default TryItem1