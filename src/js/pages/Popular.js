import React from 'react';

class Popular extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Popular Page' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Popular Page' });
  }
}

export default Popular;
