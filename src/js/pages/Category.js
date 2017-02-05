import React from 'react';

class Category extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Category Page' };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Category Page' });
  }
}

export default Category;
