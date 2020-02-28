import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

import { Layout } from '..';
import AppRoutes from '../../app-routes';
import { fetchPictures } from '../../store/home.store';

import { AppProps } from './App.props';

class App extends React.Component<AppProps> {
  constructor(public props: AppProps) {
    super(props);
    props.fetchPictures();
  }

  public render() {
    return (
      <Layout>
        <AppRoutes />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  fetchPictures: () => fetchPictures(dispatch)
});

export default connect(null, mapDispatchToProps)(App);
