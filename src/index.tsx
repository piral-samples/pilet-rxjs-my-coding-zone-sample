import * as React from 'react';
import { PiletApi } from 'my-coding-zone-piral-app';

export function setup(app: PiletApi) {
  app.showNotification('My Coding Zone ROCKS!', {
    autoClose: 5000,
  });
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerTile(() => <div>Another Demo Pilet... for now</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
