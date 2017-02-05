import React from 'react';
import Nav from './nav/Nav';
import SubNav from './nav/SubNav';
import Carousel from './nav/Carousel';
class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav/>
        <SubNav/>
        
      </div>
    );
  }
  
}

export default Header;
