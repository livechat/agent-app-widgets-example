import React, { useEffect, useState } from 'react';
import { createDetailsWidget, ICustomerProfile, SectionComponentType } from '@livechat/agent-app-sdk';
import { Card, Divider } from '@livechat/design-system';
import '@livechat/design-system/dist/design-system.css';
import ReactJson from 'react-json-view';

export default function CustomerProfile(): React.ReactElement {
  const [customerProfile, setCustomerProfile] = useState<ICustomerProfile | null>(null);
  useEffect(() => {
    createDetailsWidget().then((widget) => {
      widget.on('customer_profile', (profile) => {
        setCustomerProfile(profile);
        widget.modifySection({
          title: 'Example Customer Details',
          components: [
            {
              type: SectionComponentType.Button,
              data: {
                label: 'Default button',
                id: 'default-button',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Button,
              data: {
                label: 'Primary button',
                id: 'primary-button',
                primary: true,
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Button,
              data: {
                label: 'Secondary button',
                id: 'secondary-button',
                secondary: true,
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Button,
              data: {
                label: 'OpenApp button',
                id: 'OpenApp-button',
                openApp: true,
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Link,
              data: {
                value: 'full link',
                url: 'http://google.com',
                inline: false,
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Link,
              data: {
                value: 'inline link',
                url: 'http://google.com',
                inline: true,
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Link,
              data: {
                url: 'http://withoutValue.com',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Customer,
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Tags,
              data: {
                tags: ['new', 'important', 'private'],
                label: 'Tags with label:',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Tags,
              data: {
                tags: ['new', 'important', 'private'],
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.LabelValue,
              data: {
                value: 'Label with value without label',
                iconUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.LabelValue,
              data: {
                label: 'Label without value',
                iconUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.LabelValue,
              data: {
                label: 'Pure label',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.LabelValue,
              data: {
                label: 'Label with url',
                url: 'http://google.com',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.LabelValue,
              data: {
                label: 'Label with Icon',
                iconUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.LabelValue,
              data: {
                label: 'Label with Icon and url',
                iconUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
                url: 'http://google.com',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.LabelValue,
              data: {
                value: 'Value with url',
                url: 'http://google.com',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Pure title',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title with description',
                description: 'description',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title with value',
                value: 'value',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title wit default image',
                imgUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title wit small image',
                imgUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
                imgSize: 'small',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title wit big image',
                imgUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
                imgSize: 'big',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title with link',
                link: 'http://google.com',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title clickable',
                clickable: true,
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title clickable with openApp',
                clickable: true,
                openApp: true,
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title with id: 123',
                id: '123',
              },
            },
            {
              type: SectionComponentType.Line,
            },
            {
              type: SectionComponentType.Title,
              data: {
                title: 'Title with all options',
                value: 'value',
                description: 'description',
                imgUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
                link: 'http://google.com',
                id: '123',
                clickable: true,
                openApp: true,
              },
            },
          ],
        });
      });
    });
  }, []);

  const cardTitle = customerProfile?.name as string;
  const placeholder = <p>Customer profile object has not been loaded</p>;

  if (!customerProfile) {
    return placeholder;
  }

  return (
    <Card title={cardTitle}>
      <div>
        <p>Customer profile object contains thread id and chat id:</p>
        <ReactJson src={customerProfile.chat} collapsed />
        <Divider />
        <p>Geolocation data of the customer is also available:</p>
        <ReactJson src={customerProfile.geolocation} collapsed />
        <Divider />
        <p>Full contents of Customer profile object:</p>
        <ReactJson src={customerProfile} collapsed />
      </div>
    </Card>
  );
}
