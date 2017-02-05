import React from 'react';
import Card from './Card';
class Panel extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div class="sparrow-card-group">
        <div class="sparrow-card-headr">
          <span>猜你喜欢</span>
          <span>更多</span>
        </div>
        <div class="sparrow-card-body">
          <div class="sparrow-card-row">
            <Card title="111111" imgurl="javascript.jpg"/>
            <Card title="222222" imgurl="javascript.jpg"/>
            <Card title="333333" imgurl="javascript.jpg"/>
            
            
          </div>
          <div class="sparrow-card-row">
            <Card title="44444" imgurl="javascript.jpg"/>
            <Card title="55555" imgurl="javascript.jpg"/>
            <Card title="66666" imgurl="javascript.jpg"/>
            
            
          </div>
        </div>

        <div class="sparrow-card-footer">
          换一批
        </div>
      </div>
    );
  }
  
}

export default Panel;
