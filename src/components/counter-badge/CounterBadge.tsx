import React, { useEffect, useState } from 'react';
import { createFullscreenWidget, IFullscreenWidget } from '@livechat/agent-app-sdk';
import { Button, Card } from '@livechat/design-system';
import '@livechat/design-system/dist/design-system.css';

export default function CustomerDetailsWidget(): React.ReactElement {
  const [counter, setCounter] = useState<number>(0);
  const [fullscreenWidget, setFullscreenWidget] = useState<IFullscreenWidget | null>(null);

  useEffect(() => {
    createFullscreenWidget().then((widget) => {
      setFullscreenWidget(widget);
    });
  }, []);

  useEffect(() => {
    fullscreenWidget?.setNotificationBadge(counter);
  }, [counter]);

  return (
    <div>
      <Card title="Badge tester:">
        Click to increment counter in the badge:
        <Button style={{ margin: '0.8rem' }} onClick={() => setCounter(counter + 1)}>
          Add
        </Button>
      </Card>
    </div>
  );
}
