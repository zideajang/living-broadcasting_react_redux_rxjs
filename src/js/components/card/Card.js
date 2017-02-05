import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    
  }

  render() {
      const {title, imgurl} = this.props;
      console.log(imgurl);
    return (
        <div class="sparrow-card">
            <img src={"/src/images/" + imgurl} alt="{title}" />
            <span>{title}</span>
        </div>
    );
  }

  
}

export default Card;
