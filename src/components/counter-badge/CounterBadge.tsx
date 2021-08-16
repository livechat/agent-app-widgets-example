import React, { useEffect, useState } from 'react';
import { createFullscreenWidget, IFullscreenWidget } from '@livechat/agent-app-sdk';
import { Button, Card, NumericInput } from '@livechat/design-system';
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
        <div>
          Click to play with the counter in the badge:
          <Button style={{ margin: '0.8rem' }} onClick={() => setCounter(counter + 1)}>
            Add
          </Button>
          <Button onClick={() => setCounter(counter - 1)}>Substract</Button>
          <Button style={{ margin: '0.8rem' }} onClick={() => setCounter(0)}>
            Reset
          </Button>
        </div>
        <div>
          Or set it manually:{' '}
          <NumericInput
            width="60px"
            min={1}
            value={counter as unknown as string}
            onChange={(value) => setCounter(value as unknown as number)}
          />
        </div>
      </Card>
    </div>
  );
}
