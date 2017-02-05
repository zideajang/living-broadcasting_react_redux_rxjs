import React,{Component} from 'react';
import Header from './Header'
import Panel from './card/Panel';
export default class Layout extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Header/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}