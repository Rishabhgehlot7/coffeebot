// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // Handles default messages
  const handleDefault = () => {
    const botMessage = createChatBotMessage('How can I help?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  // Handles messages that are sent from the user
  const handleTodaySpecial = () => {
    const botMessage = createChatBotMessage('Today Special is cappuccino');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleMood = () => {
    const botMessage = createChatBotMessage(`How's your mood today?`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleGoodMood = () => {
    const botMessage = createChatBotMessage(`I prefer you Cold Coffee.`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleBadMood = () => {
    const botMessage = createChatBotMessage(`I prefer you Hot Coffee.`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleNormalMood = () => {
    const botMessage = createChatBotMessage(`I prefer you cappuccino.`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGreeting = () => {
    const botMessage = createChatBotMessage('Hello there! How can I assist you today?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMenuInquiry = () => {
    const botMessage = createChatBotMessage('Our menu includes a variety of delicious coffees, teas, pastries, and snacks. Would you like to see the full menu?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOrdering = () => {
    const botMessage = createChatBotMessage('Great! Let me guide you through the ordering process. What would you like to order today?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSpecialOffers = () => {
    const botMessage = createChatBotMessage('We currently have some exciting special offers and discounts available. Would you like to hear about them?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLocationInquiry = () => {
    const botMessage = createChatBotMessage('Our coffee shop is located at [insert address here]. You can also find us on Google Maps. Need more detailed directions?');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContactInfo = () => {
    const botMessage = createChatBotMessage(`You can contact us at [insert phone number] or email us at [insert email address]. We're here to assist you`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFeedback = () => {
    const botMessage = createChatBotMessage(`We appreciate your feedback! Please share your thoughts with us, and we'll do our best to address any concerns or suggestions.`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleThankYou = () => {
    const botMessage = createChatBotMessage(`You're welcome! If you need any further assistance, feel free to ask.`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOrder = (item) => {
    const botMessage = createChatBotMessage(`You've ordered ${item}. Thank you!`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return (
          <div>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                actions: {
                  handleHello,
                  handleDefault,
                  handleTodaySpecial,
                  handleMood,
                  handleGoodMood,
                  handleBadMood,
                  handleNormalMood,
                  handleGreeting,
                  handleMenuInquiry,
                  handleOrdering,
                  handleSpecialOffers,
                  handleLocationInquiry,
                  handleContactInfo,
                  handleFeedback,
                  handleThankYou,
                  handleOrder, // Add handleOrder method
                },
              });
            })}
          </div>
        );

      })}
    </div>
  );
};

export default ActionProvider;