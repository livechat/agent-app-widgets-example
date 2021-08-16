import React from 'react';

import '@livechat/design-system/dist/design-system.css';
import CustomerProfile from '../components/customer-profile/CustomerProfile';
import Permissions from '../components/permissions/Permissions';
import RichMessages from '../components/rich-messages/RichMessages';

export default function MessageBox(): React.ReactElement {
  return (
    <div>
      <RichMessages />
      <Permissions />
      <CustomerProfile />
    </div>
  );
}
