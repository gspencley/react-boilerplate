import React from 'react';

import { ComponentProps } from './Component.props';

const Component: React.FC<ComponentProps> = (props: ComponentProps): JSX.Element => (
  <div className={props.name}>{props.children}</div>
);

export default Component;
