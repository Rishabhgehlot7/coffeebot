import React from 'react';
const Mood = (props) => {
    const handleGoodMood = () => {
        props.actions.handleGoodMood();
    }
    const handleBadMood = () => {
        props.actions.handleBadMood();
    }
    const handleNormalMood = () => {
        props.actions.handleNormalMood();
    }
    return (
        <div className=' leftM'>
            <button className='btn-bot' onClick={handleGoodMood}>Good</button>
            <button className='btn-bot' onClick={handleBadMood}>Bad</button>
            <button className='btn-bot' onClick={handleNormalMood}>Normal</button>
        </div>
    )
}

export default Mood