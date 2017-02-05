import React from 'react';

class Living extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Living Page' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Living Page' });
  }
}

export default Living;
