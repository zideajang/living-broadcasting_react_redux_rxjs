import React,{Component} from 'react';
import {Link} from 'react-router';
import Style from 'style-it';

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

        const liStyle = {
            
        }

        const links = this.state.links.map((item,key)=>{
            return (<li key={key} class="nav-item"><Link class="nav-link" to={item.to}>{item.name}</Link></li>)
        });
        const subNavStyle = {
            background:'white',
            fontSize:'12px'
        }
        return Style.it(`
            .nav-item:hover {
                border-bottom:2px solid orangered;
            }
            .nav-link:hover{
                color:orangered;
            }
            `,
            <div style={subNavStyle}>
                <ul class="nav justify-content-center">
                    {links}
                </ul>
            </div>
        );
        
    }
}