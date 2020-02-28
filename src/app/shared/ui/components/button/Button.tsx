import React from 'react';

import {ButtonProps} from './Button.props';

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => (
  <button onClick={props.clicked}>{props.children}</button>
);
