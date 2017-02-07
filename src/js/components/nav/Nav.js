import React,{Component} from 'react';
import SubNav from './SubNav';

export default class Nav extends Component{
    render(){
        return (
            <div>
                <nav class="navbar navbar-light bg-faded">
                <form class="form-inline">
                    <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-search"></span></span>
                    <input type="text" class="form-control" placeholder="搜索" aria-describedby="basic-addon1"/>
                    </div>
                </form>
                </nav>                     
                
            </div>
        )
    }
}