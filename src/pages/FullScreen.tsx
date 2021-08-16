import React from 'react';

import '@livechat/design-system/dist/design-system.css';
import CounterBadge from '../components/counter-badge/CounterBadge';
import Permissions from '../components/permissions/Permissions';

export default function FullScreen(): React.ReactElement {
  return (
    <div>
      <CounterBadge />
      <Permissions />
    </div>
  );
}
