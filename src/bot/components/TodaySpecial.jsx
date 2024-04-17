import React from 'react';

const TodaySpecial = (props) => {
    const handleTodaySpecialYes = () => {
        props.actions.handleTodaySpecialYes();
    }
    const handleTodaySpecialNo = () => {
        props.actions.handleTodaySpecialNo();
    }

    return (
        <div className='leftM'>
            <button className='btn-bot' onClick={handleTodaySpecialYes}>Yes</button>
            <button className='btn-bot' onClick={handleTodaySpecialNo}>No</button>
        </div>
    )
}

export default TodaySpecial