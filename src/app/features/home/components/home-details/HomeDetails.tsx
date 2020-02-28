import React from 'react';

import logo from '../../../../../assets/logo.svg';
import { Button } from '../../../../shared/ui';
import Component from '../../../../shared/ui/components/Component/Component';

import { HomeDetailsProps } from './HomeDetails.props';

export const HomeDetails: React.FC<HomeDetailsProps> = (props: HomeDetailsProps): JSX.Element => (
  <Component name='HomeDetails'>
    <header>
      <img src={logo} alt='logo' />
      <p>
        Edit <code>src/features/home/components/Home.tsx</code> and save to reload.
      </p>
      <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
      <Button clicked={props.clicked}>Clicked {props.clickedCount} Times</Button>
    </header>
  </Component>
);

