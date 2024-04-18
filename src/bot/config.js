import { createChatBotMessage } from 'react-chatbot-kit';
import Mood from './components/Mood';
import Occassion from './components/Occassion';
import TodaySpecial from './components/TodaySpecial';
import TryItem from './components/TryItem';
import TryItem1 from './components/TryItem1';
import TryItem2 from './components/TryItem2';
import TryItem3 from './components/TryItem3';
import TryItem4 from './components/TryItem4';
import TryItem5 from './components/TryItem5';
import TryItem6 from './components/TryItem6';
import TryItem7 from './components/TryItem7';
import TryItem8 from './components/TryItem8';

const data = [
  {
    id: 1,
    item: "Cappuccino with pancakes",
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
  }
]
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
      widgetFunc: (props) => <TryItem1 {...props} item={"Cappuccino with pancakes"} />,
    },
    {
      widgetName: 'TryItem2',
      widgetFunc: (props) => <TryItem2 {...props} item={"Hot Coffee"} />,
    },
    {
      widgetName: 'TryItem3',
      widgetFunc: (props) => <TryItem3 {...props} item={"Delicious Beverages"} />,
    },
    {
      widgetName: 'TryItem4',
      widgetFunc: (props) => <TryItem4 {...props} item={"Coffee with ice cream and pancakes"} />,
    },
    {
      widgetName: 'TryItem5',
      widgetFunc: (props) => <TryItem5 {...props} item={"Brewed Coffee"} />,
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