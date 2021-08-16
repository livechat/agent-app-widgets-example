import React from 'react';
import '@livechat/design-system/dist/design-system.css';
import './Tiles.css';
import Tile, { IProps as ITileProps } from './Tile';
import AppRoute from '../../routes';

const availableTiles: ITileProps[] = [
  { title: 'Permissions', description: 'Microphone, Camera, Clippboard permissions test', route: AppRoute.Permissions },
  {
    title: 'Customer Profile',
    description: 'Test if customer profile can be read by widget',
    route: AppRoute.CustomerProile,
  },
  { title: 'Rich messages', description: 'Send different types of rich messages', route: AppRoute.RichMessages },
  {
    title: 'Fullscreen Example - notification badge',
    description: 'Check if badge counter works for integration',
    route: AppRoute.CounterBadge,
  },
];

export default function Tiles(): React.ReactElement {
  return (
    <div className="tiles-container">
      {availableTiles.map((tile: ITileProps) => (
        <Tile title={tile.title} description={tile.description} route={tile.route} />
      ))}
    </div>
  );
}
