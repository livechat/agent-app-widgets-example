import React from 'react';

import '@livechat/design-system/dist/design-system.css';
import CustomerProfile from '../components/customer-profile/CustomerProfile';
import Permissions from '../components/permissions/Permissions';

export default function CustomerDetailsWidget(): React.ReactElement {
  return (
    <div>
      <CustomerProfile />
      <Permissions />
    </div>
  );
}
