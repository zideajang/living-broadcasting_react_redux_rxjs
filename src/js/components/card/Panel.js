import React from 'react';

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
            <div class="sparrow-card">
              <img src="/src/images/javascript.jpg" alt="111" />
              <span>111</span>
            </div>
            <div class="sparrow-card">
              <img src="/src/images/javascript.jpg" alt="111" />
              <span>222</span>
            </div>
            <div class="sparrow-card">
              <img src="/src/images/javascript.jpg" alt="111" />
              <span>333</span>
            </div>
          </div>
          <div class="sparrow-card-row">
            <div class="sparrow-card">
              <img src="/src/images/javascript.jpg" alt="111" />
              <span>111</span>
            </div>
            <div class="sparrow-card">
              <img src="/src/images/javascript.jpg" alt="111" />
              <span>222</span>
            </div>
            <div class="sparrow-card">
              <img src="/src/images/javascript.jpg" alt="111" />
              <span>333</span>
            </div>
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
