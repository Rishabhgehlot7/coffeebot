import React from 'react';

const Occassion = (props) => {
    const handleWorkRelated = () => {
        props.actions.handleWorkRelated();
    }
    const handleCasualOuting = () => {
        props.actions.handleCasualOuting();
    }
    const handleOnADate = () => {
        props.actions.handleOnADate();
    }
    const handleJustMorningCoffee = () => {
        props.actions.handleJustMorningCoffee();
    }

    return (
        <div className='leftM'>
            <button className='btn-bot' onClick={handleWorkRelated}>Work related</button>
            <button className='btn-bot' onClick={handleCasualOuting}>Casual Outing</button>
            <button className='btn-bot' onClick={handleOnADate}>on a Date❤️</button>
            <button className='btn-bot' onClick={handleJustMorningCoffee}>Just Morning Coffee</button>
        </div>
    )
}
export default Occassion