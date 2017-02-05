import React,{Component} from 'react';
import {Link} from 'react-router';

export default class SubNav extends Component{
    constructor(){
        super();
        this.state = {
            links:[
                {
                    to:"/src/",
                    name:"推荐",
                    active:true
                },
                {
                    to:"/src/popular",
                    name:"热门",
                    active:true
                },
                {
                    to:"/src/category",
                    name:"分类",
                    active:true
                },
                {
                    to:"/src/rank",
                    name:"榜单",
                    active:true
                },
                {
                    to:"/src/living",
                    name:"主播",
                    active:true
                }
            ]
        }
    }
    render(){
        const links = this.state.links.map((item,key)=>{
            return (<li key={key} class="nav-item"><Link class="nav-link" to={item.to}>{item.name}</Link></li>)
        });
        const subNavStyle = {
            background:'white',
            fontSize:'12px'
        }
        return(
            <div style={subNavStyle}>
                <ul class="nav justify-content-center">
                    {links}
                </ul>
            </div>
        )
    }
}