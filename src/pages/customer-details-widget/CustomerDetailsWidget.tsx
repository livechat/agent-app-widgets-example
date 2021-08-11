import React, { ReactElement, useState } from 'react';
import { createDetailsWidget } from '@livechat/agent-app-sdk';
import { ICustomerProfile } from '@livechat/agent-app-sdk/types/widgets/shared/customer-profile';
import { SectionComponentType } from '@livechat/agent-app-sdk/types/widgets/details/interfaces';

export default function CustomerDetailsWidget(): ReactElement {
  const [customerProfile, setCustomerProfile] = useState<ICustomerProfile | null>(null);
  createDetailsWidget().then((widget) => {
    widget.on('customer_profile', (profile) => {
      setCustomerProfile(profile);
    });

    widget.modifySection({
      title: 'My widget',
      components: [
        {
          type: SectionComponentType.Title,
          data: {
            value: 'The title will be modified',
            title: 'test',
          },
        },
      ],
    });
  });
  return <>{JSON.stringify(customerProfile)}</>;
}
