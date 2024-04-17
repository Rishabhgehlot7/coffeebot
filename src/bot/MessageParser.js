// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        actions.handleGreeting();
    }
    else if (message.includes('menu')) {
        actions.handleMenuInquiry();
    }
    else if (message.includes('order')) {
        // Extract item from message (e.g., "order cappuccino")
        const item = message.split('order')[1].trim();
        actions.handleOrder(item);
    }
    else if (message.includes('Try')) {
        // Extract item from message (e.g., "order cappuccino")
        const item = message.split('order')[1].trim();
        actions.handleOrder(item);
    }
    else if (message.includes('special')) {
        actions.handleSpecialOffers();
    }
    else if (message.includes('location')) {
        actions.handleLocationInquiry();
    }
    else if (message.includes('contact')) {
        actions.handleContactInfo();
    }
    else if (message.includes('feedback')) {
        actions.handleFeedback();
    }
    else if (message.includes('thank')) {
        actions.handleThankYou();
    }
    else if (message.includes('yes') || message.includes('Yes') || message.includes('YES')) {
        actions.handleTodaySpecial();
    }
    else if (message.includes('No') || message.includes('no') || message.includes('NO')) {
        actions.handleMood();
    }
    else if (message.includes('good') || message.includes('Good') || message.includes('GOOD')) {
        actions.handleGoodMood();
    }
    else if (message.includes('bad') || message.includes('Bad') || message.includes('BAD')) {
        actions.handleBadMood();
    }
    else if (message.includes('normal') || message.includes('Normal') || message.includes('NORMAL')) {
        actions.handleNormalMood();
    }
    else {
        actions.handleDefault();
    }
};



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;