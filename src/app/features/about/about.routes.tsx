import React, {lazy, Suspense} from 'react';
import { useRouteMatch, BrowserRouter, Route, Switch } from 'react-router-dom';

import {Loading} from '../../shared/ui';

import About from './components/About/About';

const Code = lazy(() => import('./features/code/code'));

const AboutRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}/>
      <Switch>
        <Route exact path={path} component={About}/>
        <Route path={`${path}/code`} component={Code}/>
      </Switch>
    </BrowserRouter>
  );
};

export default AboutRoutes;
