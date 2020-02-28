import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Loading } from './shared/ui';

const Home = lazy(() => import('./features/home/home.routes'));
const About = lazy(() => import('./features/about/about.routes'));

const AppRoutes: React.FC = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Suspense>
  </Router>
);

export default AppRoutes;
