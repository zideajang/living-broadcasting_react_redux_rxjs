import React from 'react';

class Recommend extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Recommend Page' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Recommend Page' });
  }
}

export default Recommend;
