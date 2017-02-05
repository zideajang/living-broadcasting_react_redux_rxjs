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
                <h3>Welcome</h3>
                <Panel/>
            </div>
        )
    }
}