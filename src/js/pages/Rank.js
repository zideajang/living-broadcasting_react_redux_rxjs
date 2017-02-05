import React from 'react';

class Rank extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Rank Page' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Rank Page' });
  }
}

export default Rank;
