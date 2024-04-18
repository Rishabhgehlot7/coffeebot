import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from '../bot/ActionProvider';
import MessageParser from '../bot/MessageParser';
import config from '../bot/config';
import bot from '../images/bot.jpeg';

const ChatBotComponent = () => {
    const [show, setShow] = useState(false);
    return (
        <div className=' fixed bottom-5 right-5'>{!show ?
            <button onClick={() => setShow(true)} className='animate-bounce'>
                <img src={bot} alt="" className='rounded-full w-20 h-20' />
            </button> :
            <div className='relative'>
                <div className=' absolute z-50 right-5 top-2 text-xl font-bold cursor-pointer' onClick={() => setShow(false)}>X</div>
                <Chatbot
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}

                />
            </div>}
        </div>

    )
}

export default ChatBotComponent