import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button, Card, Divider } from '@livechat/design-system';
import '@livechat/design-system/dist/design-system.css';
import './Tiles.css';

export interface IProps {
  title: string;
  description: string;
  route: string;
}

export default function Tile(props: IProps): React.ReactElement {
  const { title, description, route: path } = props;
  return (
    <div style={{ width: '100%' }}>
      <Card title={title}>
        <div>
          <p> {description}</p>
          <Divider />
          <Link href={path} className="active">
            <Button kind="primary">Open</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
