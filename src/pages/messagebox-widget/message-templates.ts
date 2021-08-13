import { IRichMessage } from '@livechat/agent-app-sdk';

export interface Template {
  label: string;
  id: string;
  message: IRichMessage;
}
const richWithImage: IRichMessage = {
  template_id: 'cards',
  elements: [
    {
      title: 'Rich message with an image',
      subtitle: 'this is subtitle',
      image: {
        url: 'https://www.livechat.com/livechat-agents.5dc134d1bce1a7e12ff409533d9abf2662c2761458a567fbc4506bceba138ba2.svg',
      },
    },
  ],
};

const carousel: IRichMessage = {
  template_id: 'cards',
  elements: [
    {
      title: 'Tomatoes',
      subtitle:
        'The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. They are also very tasty!',
      image: {
        url: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
      },
      buttons: [
        {
          type: 'url',
          text: 'Open link',
          postback_id: 'open_url',
          user_ids: [],
          value: 'https://example.org/?product1',
        },
      ],
    },
    {
      title: 'Cucumber',
      subtitle:
        'There are three main varieties of cucumber: slicing, pickling, and seedless. Within these varieties, several cultivars have been created.',
      image: {
        url: 'https://images.pexels.com/photos/37528/cucumber-salad-food-healthy-37528.jpeg',
      },
      buttons: [
        {
          type: 'url',
          text: 'Open link',
          postback_id: 'open_url',
          user_ids: [],
          value: 'https://example.org/?product2',
        },
      ],
    },
    {
      title: 'Potatoe',
      subtitle:
        'Potatoe is a root vegetable, very popular around the world. With the potatoe, you can do a lot, for example prepare awesome french fries.',
      image: {
        url: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg',
      },
      buttons: [
        {
          type: 'url',
          text: 'Open link',
          postback_id: 'open_url',
          user_ids: [],
          value: 'https://example.org/?product3',
        },
      ],
    },
  ],
};

const quickReplies: IRichMessage = {
  template_id: 'quick_replies',
  elements: [
    {
      title: 'What OS are you using?',
      buttons: [
        {
          type: 'message',
          text: 'Windows',
          postback_id: 'send_message',
          user_ids: [],
          value: 'Windows',
        },
        {
          type: 'message',
          text: 'MacOS',
          postback_id: 'send_message',
          user_ids: [],
          value: 'MacOS',
        },
        {
          type: 'message',
          text: 'Other',
          postback_id: 'send_message',
          user_ids: [],
          value: 'Other',
        },
      ],
    },
  ],
};

const templates: Template[] = [
  {
    label: 'Rich message with image and button',
    id: 'rich-message',
    message: richWithImage,
  },
  {
    label: 'Carousel',
    id: 'carousel',
    message: carousel,
  },
  {
    label: 'Quick replies',
    id: 'quick-replies',
    message: quickReplies,
  },
];

export default templates;
