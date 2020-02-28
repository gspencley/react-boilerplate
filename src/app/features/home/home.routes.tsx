import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Loading } from '../../shared/ui';

import Home from './components/home/Home';

const HomeRoutes: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default HomeRoutes;
