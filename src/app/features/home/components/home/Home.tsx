import React from 'react';

import { HomeDetails } from '..';
import '../home-details/Home.scss';

interface HomeState {
  clickedCount: number;
}

class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      clickedCount: 0
    };
  }

  public render = () => (
    <HomeDetails clicked={this.clickity} clickedCount={this.state.clickedCount} />
  );

  private clickity = () => this.setState({ clickedCount: this.state.clickedCount + 1 });
}

export default Home;
