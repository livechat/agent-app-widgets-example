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
              type: SectionComponentType.LabelValue,
              data: {
                label: 'Customer id:',
                value: profile.id,
              },
            },
            {
              type: SectionComponentType.Button,
              data: {
                id: 'go-to-app',
                label: 'Open application in a tab to see more',
                openApp: true,
                primary: true,
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
    <div>
      <header className="AppHeader">Details</header>
      <main>
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
      </main>
    </div>
  );
}
