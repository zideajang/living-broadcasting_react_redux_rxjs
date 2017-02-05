import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import Layout from './components/Layout';
import { Router, Route, Link, browserHistory,IndexRoute} from 'react-router'

import Recommend from './pages/Recommend'
import Category from './pages/Category'
import Rank from './pages/Rank'
import Living from './pages/Living'
import Popular from './pages/Popular'

const app = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/src/" component={Layout}>
        <IndexRoute component={Recommend}/>
        <Route path="popular" component={Popular}/>
        <Route path="category" component={Category}/>
        <Route path="living" component={Living}/>
        <Route path="rank" component={Rank}/>

    </Route>
    </Router>),
  document.getElementById('root')
);

