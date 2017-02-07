import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
        <div class="sparrow-footer">
            <ul class="sparrow-footer_container">
                <li class="sparrow-footer_item">
                    
                    <span>首页</span>
                </li>
                <li class="sparrow-footer_item">订阅</li>
                <li class="sparrow-footer_item center"><div></div></li>
                <li class="sparrow-footer_item">发现</li>
                <li class="sparrow-footer_item">我的</li>
            </ul>    
        </div>
    );
  }

  
}

export default Footer;
