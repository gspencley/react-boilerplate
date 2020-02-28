import React from 'react';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

import {LayoutProps} from './Layout.props';

export const Layout: React.FC<LayoutProps> = (props: LayoutProps): JSX.Element => (
  <React.Fragment>
    <Header />
    {props.children}
    <Footer />
  </React.Fragment>
);
