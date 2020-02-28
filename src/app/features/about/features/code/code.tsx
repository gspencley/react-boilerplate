import React, { Suspense } from 'react';
import { useRouteMatch, BrowserRouter, Route, Switch } from 'react-router-dom';

import {Loading} from '../../../../shared/ui';

import Code from './components/Code';

const CodeRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}/>
      <Switch>
        <Route exact path={path} component={Code}/>
      </Switch>
    </BrowserRouter>
  );
};

export default CodeRoutes;
