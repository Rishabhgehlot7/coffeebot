import { createChatBotMessage } from 'react-chatbot-kit';
import Mood from './components/Mood';
import Occassion from './components/Occassion';
import TodaySpecial from './components/TodaySpecial';
import TryItem from './components/TryItem';
import TryItem1 from './components/TryItem1';
import TryItem6 from './components/TryItem6';
import TryItem7 from './components/TryItem7';
import TryItem8 from './components/TryItem8';

const config = {
  initialMessages: [createChatBotMessage(`Hi, Good to see! Welcome to Bella Epoque.`), createChatBotMessage(`Should I suggest our Today's Special for you.`, {
    widget: 'TodaySpecialWidget',
  }),],
  widgets: [
    {
      widgetName: 'MoodWidget',
      widgetFunc: (props) => <Mood {...props} />,
    },
    {
      widgetName: 'TodaySpecialWidget',
      widgetFunc: (props) => <TodaySpecial {...props} />,
    },
    {
      widgetName: 'OccassionWidget',
      widgetFunc: (props) => <Occassion {...props} />,
    },
    {
      widgetName: 'TryItem',
      widgetFunc: (props) => <TryItem {...props} />,
    },
    {
      widgetName: 'TryItem1',
      widgetFunc: (props) => <TryItem1 {...props} item="Today's Special" />,
    },
    {
      widgetName: 'TryItem2',
      widgetFunc: (props) => <TryItem1 {...props} item="hot Coffee" />,
    },
    {
      widgetName: 'TryItem3',
      widgetFunc: (props) => <TryItem1 {...props} item="delicious beverages" />,
    },
    {
      widgetName: 'TryItem4',
      widgetFunc: (props) => <TryItem1 {...props} item="Coffee with ice cream and pancakes" />,
    },
    {
      widgetName: 'TryItem5',
      widgetFunc: (props) => <TryItem1 {...props} item="brewed coffee" />,
    },
    {
      widgetName: 'TryItem6',
      widgetFunc: (props) => <TryItem6 {...props} item="Cold Coffee" />,
    },
    {
      widgetName: 'TryItem7',
      widgetFunc: (props) => <TryItem7 {...props} item="Hot Coffee" />,
    },
    {
      widgetName: 'TryItem8',
      widgetFunc: (props) => <TryItem8 {...props} item="cappuccino" />,
    },
  ],
};

export default config;