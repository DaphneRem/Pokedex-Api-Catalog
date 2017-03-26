import React from 'react'
import { Route, Router, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Search from './components/Search';
import NotFoundPage from './components/NotFoundPage';
import App from './components/App';


const routes = (
    <Route>
        <Route path="/" component={App}>
        <Route path="catalog" component={Layout}/>
        <Route path="search" component={Search}/>
    {/* <IndexRoute component={IndexPage}/> */}
    {/* <Route path="athlete/:id" component={AthletePage}/> */}
    </Route>
    <Route path="*" component={NotFoundPage}/>
</Route>
);

export default routes;
